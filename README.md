# starledger-admin

## Client

### Available Calls:

- createNewsArticle
- createNewsCategory
- createErrorLog
- deleteNewsArticle
- getArticle
- getDso
- getNft
- getProfile
- getSetting
- listNewsArticles
- listNewsCategories
- listNfts
- listOwnedTokens
- loginWithEmail
- loginWithWallet
- registerWithEmail
- search
- updateArticle
- updateDso
- updateProfile

### createNewsArticle

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Optional</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Optional</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Optional</td><td>string</td></tr>
	<tr><td>status</td><td>Optional</td><td>draft | published</td></tr>
	<tr><td>categoryIds</td><td>Optional</td><td>string[]</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>categoryIds</td><td>Required</td><td>string[]</td></tr>
</table>

### createNewsCategory

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>
</table>

### createErrorLog

**Request**

<table>
	<tr><td>code</td><td>Required</td><td>string</td></tr>
	<tr><td>message</td><td>Required</td><td>string</td></tr>
	<tr><td>notes</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### deleteNewsArticle

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### getArticle

**Request**

<table>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>
</table>

### getDso

**Request**

<table>
	<tr><td>identifier</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>identifier</td><td>Required</td><td>string</td></tr>
	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>rightAscension</td><td>Required</td><td>string</td></tr>
	<tr><td>declination</td><td>Required</td><td>string</td></tr>
	<tr><td>type</td><td>Required</td><td>string</td></tr>
	<tr><td>facts</td><td>Required</td><td>string[]</td></tr>
</table>

### getNft

**Request**

<table>
	<tr><td>hip</td><td>Required</td><td>number</td></tr>
</table>

**Response**

<table>
	<tr><td>tokenId</td><td>Required</td><td>number</td></tr>
</table>

### getProfile

**Request**

<table>

</table>

**Response**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>discord</td><td>Required</td><td>string</td></tr>
	<tr><td>telegram</td><td>Required</td><td>string</td></tr>
</table>

### getSetting

**Request**

<table>
	<tr><td>key</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>key</td><td>Required</td><td>string</td></tr>
	<tr><td>value</td><td>Required</td><td>string</td></tr>
</table>

### listNewsArticles

**Request**

<table>
	<tr><td>filter</td><td>Optional</td>	<tr><td>categoryIds</td><td>Optional</td><td>string[]</td></tr></tr>
</table>

**Response**

<table>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### listNewsCategories

**Request**

<table>

</table>

**Response**

<table>
	<tr><td>results</td><td>Required</td><td>	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>string</td></tr>
	<tr><td>authorUserId</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### listNfts

**Request**

<table>

</table>

**Response**

<table>
	<tr><td>results</td><td>Required</td><td>	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>coordinates</td><td>Required</td><td>string</td></tr>
	<tr><td>ranking</td><td>Required</td><td>number</td></tr>
	<tr><td>rarity</td><td>Required</td><td>string</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>tokenId</td><td>Required</td><td>number</td></tr>[]</td></tr>
</table>

### listOwnedTokens

**Request**

<table>

</table>

**Response**

<table>
	<tr><td>results</td><td>Required</td><td>	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>constellation</td><td>Required</td><td>string</td></tr>
	<tr><td>coordinates</td><td>Required</td><td>string</td></tr>
	<tr><td>ranking</td><td>Required</td><td>number</td></tr>
	<tr><td>rarity</td><td>Required</td><td>string</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>
	<tr><td>tokenId</td><td>Required</td><td>number</td></tr>[]</td></tr>
</table>

### loginWithEmail

**Request**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>password</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>expiresIn</td><td>Required</td><td>number</td></tr>
	<tr><td>token</td><td>Required</td><td>string</td></tr>
</table>

### loginWithWallet

**Request**

<table>
	<tr><td>address</td><td>Required</td><td>string</td></tr>
	<tr><td>signature</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>expiresIn</td><td>Required</td><td>number</td></tr>
	<tr><td>token</td><td>Required</td><td>string</td></tr>
</table>

### registerWithEmail

**Request**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>password</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
</table>

### search

**Request**

<table>
	<tr><td>query</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>
	<tr><td>results</td><td>Required</td><td>	<tr><td>hip</td><td>Required</td><td>number</td></tr>
	<tr><td>name</td><td>Required</td><td>string</td></tr>[]</td></tr>
</table>

### updateArticle

**Request**

<table>
	<tr><td>id</td><td>Required</td><td>string</td></tr>
	<tr><td>slug</td><td>Required</td><td>string</td></tr>
	<tr><td>image</td><td>Required</td><td>string</td></tr>
	<tr><td>title</td><td>Required</td><td>string</td></tr>
	<tr><td>content</td><td>Optional</td><td>string</td></tr>
	<tr><td>overview</td><td>Optional</td><td>string</td></tr>
	<tr><td>publishedAt</td><td>Optional</td><td>string</td></tr>
	<tr><td>status</td><td>Required</td><td>draft | published</td></tr>
</table>

**Response**

<table>

</table>

### updateDso

**Request**

<table>
	<tr><td>identifier</td><td>Required</td><td>string</td></tr>
	<tr><td>overview</td><td>Required</td><td>string</td></tr>
	<tr><td>description</td><td>Required</td><td>string</td></tr>
	<tr><td>bvColor</td><td>Required</td><td>string</td></tr>
	<tr><td>stellarClassification</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>

### updateProfile

**Request**

<table>
	<tr><td>email</td><td>Required</td><td>string</td></tr>
	<tr><td>discord</td><td>Required</td><td>string</td></tr>
	<tr><td>telegram</td><td>Required</td><td>string</td></tr>
</table>

**Response**

<table>

</table>
