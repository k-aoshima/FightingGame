using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerManager : MonoBehaviour
{
    Rigidbody2D rb;
    Animator animator;

    public float jumpForce = 350f;
    private int jumpCount = 0;
    public float MoveSpeed = 8f;
    public Transform attackPoint;
    public float attackRadius;
    public LayerMask enemyLayer;
    public int hp = 3;

    int at = 1;

    protected virtual void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        animator = GetComponent<Animator>();
    }

    protected virtual void Update()
    {
        if (Input.GetKeyDown(KeyCode.Z))
        {
            Attack();
        }

        if (Input.GetKeyDown(KeyCode.UpArrow) && this.jumpCount < 1)
        {
            rb.AddForce(transform.up * jumpForce);
            animator.SetBool("IsJump", true);
            jumpCount++;
        }

        Movement();
    }

    private void Movement()
    {
        float x = Input.GetAxisRaw("Horizontal");
        rb.velocity = new Vector2(x * MoveSpeed, rb.velocity.y);

        if (x > 0)
        {
            transform.localScale = new Vector3(-1, 1, 1);
        }

        if (x < 0)
        {
            transform.localScale = new Vector3(1, 1, 1);
        }

        animator.SetFloat("Speed", Mathf.Abs(x));
    }

    private void Attack()
    {
        animator.SetTrigger("IsAttack");
        Collider2D[] hitEnemys = Physics2D.OverlapCircleAll(attackPoint.position, attackRadius, enemyLayer);
        foreach (Collider2D hitEnemy in hitEnemys)
        {
            Debug.Log(hitEnemy.gameObject.name + "に攻撃");
            hitEnemy.GetComponent<MarisaManager>().OnDamage(at);
        }
    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(attackPoint.position, attackRadius);
    }

    protected virtual void OnDamage(int damage)
    {
        hp -= damage;
        animator.SetTrigger("Damage");
        if (hp <= 0)
        {
            Die();
        }
    }

    protected virtual void Die()
    {
        hp = 0;
        animator.SetTrigger("IsDie");
    }

    private void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.CompareTag("Floor"))
        {
            jumpCount = 0;
            animator.SetBool("IsJump", false);
        }
    }
}
