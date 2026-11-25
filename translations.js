(() => {
  const languages = ['en','ja','ko','fr','de','es'];
  const all = window.RPM_TRANSLATIONS = Object.fromEntries(languages.map(l=>[l,{ui:{}}]));
  const rows = `
語言|Language|言語|언어|Langue|Sprache|Idioma
跟隨系統|Use device language|端末の言語に従う|시스템 언어 사용|Langue de l’appareil|Gerätesprache verwenden|Idioma del dispositivo
跳至主要內容|Skip to content|本文へスキップ|본문으로 이동|Aller au contenu|Zum Inhalt|Ir al contenido
常見問題|FAQ|よくある質問|자주 묻는 질문|FAQ|FAQ|Preguntas frecuentes
立即下載|Download|ダウンロード|다운로드|Télécharger|Laden|Descargar
使用條款|Terms of Use|利用規約|이용약관|Conditions d’utilisation|Nutzungsbedingungen|Términos de uso
隱私政策|Privacy Policy|プライバシーポリシー|개인정보 처리방침|Confidentialité|Datenschutz|Privacidad
意見回饋|Feedback|フィードバック|의견 보내기|Commentaires|Feedback|Comentarios
關閉|Close|閉じる|닫기|Fermer|Schließen|Cerrar
戴上 AirPods。|Wear AirPods.|AirPods を装着。|AirPods를 착용하고.|Portez vos AirPods.|AirPods aufsetzen.|Ponte los AirPods.
即時看見|See your|リアルタイムで|실시간으로 확인하는|Suivez vos|Sehen Sie Ihre|Mira tus
你的 RPM。|RPM live.|あなたの RPM。|나의 RPM.|RPM en direct.|RPM live.|RPM en directo.
打開 App，把手機放上飛輪車。|Open the app and mount your phone on the bike.|アプリを開き、スマートフォンをバイクに固定。|앱을 열고 휴대폰을 자전거에 고정하세요.|Ouvrez l’app et fixez votre téléphone au vélo.|App öffnen und Handy am Bike befestigen.|Abre la app y fija el móvil a la bicicleta.
踩踏的節奏，就在眼前。|Your riding rhythm, right in front of you.|ペダリングのリズムが目の前に。|페달링 리듬을 눈앞에서.|Votre rythme, sous vos yeux.|Ihr Tritt-Rhythmus direkt im Blick.|Tu ritmo, ante tus ojos.
體驗你的騎乘|Explore your ride|ライドを体験|라이딩 체험|Découvrez votre séance|Fahrt entdecken|Explora tu sesión
App Store 準備中|Coming to App Store|App Store 準備中|App Store 출시 예정|Bientôt sur l’App Store|Bald im App Store|Próximamente en App Store
戴上 AirPods|Wear AirPods|AirPods を装着|AirPods 착용|Portez vos AirPods|AirPods aufsetzen|Ponte los AirPods
即時查看 RPM|Live RPM|RPM をリアルタイム表示|실시간 RPM|RPM en direct|RPM live|RPM en directo
示意|Demo|デモ|데모|Démo|Demo|Demo
坐姿|Seated|シッティング|앉아서|Assis|Sitzend|Sentado
站姿|Standing|ダンシング|서서|Debout|Stehend|De pie
時間|Time|時間|시간|Temps|Zeit|Tiempo
騎乘時間|Ride time|ライド時間|주행 시간|Durée|Fahrzeit|Tiempo
虛擬距離|Virtual distance|仮想距離|가상 거리|Distance virtuelle|Virtuelle Distanz|Distancia virtual
虛擬速度|Virtual speed|仮想速度|가상 속도|Vitesse virtuelle|Virtuelle Geschwindigkeit|Velocidad virtual
估算熱量|Est. calories|推定カロリー|예상 칼로리|Calories estimées|Geschätzte Kalorien|Calorías estimadas
Ⅱ　騎乘中|Ⅱ Riding|Ⅱ ライド中|Ⅱ 라이딩 중|Ⅱ En cours|Ⅱ Fahrt läuft|Ⅱ En marcha
你的每趟騎乘紀錄|Your ride history|あなたのライド履歴|나의 라이딩 기록|Votre historique|Ihr Fahrverlauf|Tu historial
✓ 已保存騎乘摘要|✓ Ride saved|✓ ライドを保存しました|✓ 라이딩 저장 완료|✓ Séance enregistrée|✓ Fahrt gespeichert|✓ Sesión guardada
手機架好，抬眼就看到。|Mount your phone. Just glance up.|スマートフォンを固定して、ひと目で確認。|휴대폰을 고정하고 한눈에 확인.|Fixez le téléphone, puis levez les yeux.|Handy befestigen, einfach ablesen.|Fija el móvil y mira de un vistazo.
正常坐姿，不用刻意擺頭。|Ride seated, without deliberate head movement.|自然なシッティング。頭をわざと振る必要はありません。|자연스럽게 앉아서, 일부러 머리를 흔들 필요 없어요.|Pédalez assis, sans bouger volontairement la tête.|Sitzend fahren, ohne den Kopf absichtlich zu bewegen.|Pedalea sentado, sin mover la cabeza a propósito.
離開坐墊，切換站姿的偵測基準。|Stand up and switch the detection mode.|立ちこぎに合わせて検出モードを切替。|일어서면 감지 모드를 전환하세요.|Levez-vous et changez de mode de détection.|Aufstehen und Erkennungsmodus wechseln.|Levántate y cambia el modo de detección.
手機橫放，放大你的騎乘視野。|Turn your phone for a wider dashboard.|横向きで、広いダッシュボードに。|휴대폰을 가로로 돌려 더 넓게.|Tournez le téléphone pour un affichage plus large.|Handy drehen für ein breiteres Cockpit.|Gira el móvil para ampliar el panel.
結束並保存，留下這一趟騎乘摘要。|Finish and save your ride summary.|ライドを終了してサマリーを保存。|종료하고 라이딩 요약을 저장하세요.|Terminez et enregistrez le résumé.|Fahrt beenden und Zusammenfassung speichern.|Finaliza y guarda el resumen.
坐姿騎乘|Seated ride|シッティング|앉아서 타기|Assis|Sitzend|Sentado
站姿騎乘|Standing ride|ダンシング|서서 타기|Debout|Stehend|De pie
手機橫放|Landscape|横向き|가로 화면|Paysage|Querformat|Horizontal
騎乘紀錄|Ride history|ライド履歴|라이딩 기록|Historique|Verlauf|Historial
你的 AirPods，讓手機變成飛輪儀表板。|Your AirPods turn your phone into an indoor cycling dashboard.|AirPods で、スマートフォンが室内バイクのダッシュボードに。|AirPods로 휴대폰을 실내 자전거 계기판으로.|Vos AirPods transforment votre téléphone en tableau de bord pour vélo indoor.|Ihre AirPods machen das Handy zum Indoor-Cycling-Cockpit.|Tus AirPods convierten el móvil en un panel de ciclismo indoor.
熟悉的耳機，多一種|Your familiar earbuds. A new way to|いつものイヤホンで、新しい|익숙한 이어폰, 새로운|Vos écouteurs habituels. Une nouvelle façon de|Vertraute Kopfhörer. Eine neue Art zu|Tus auriculares de siempre. Otra forma de
騎乘方式。|ride.|ライド体験。|라이딩.|pédaler.|fahren.|pedalear.
戴上 AirPods，開啟 AirPods RPM。|Wear AirPods and open AirPods RPM.|AirPods を装着して AirPods RPM を開く。|AirPods를 착용하고 AirPods RPM을 실행하세요.|Portez vos AirPods et ouvrez AirPods RPM.|AirPods aufsetzen und AirPods RPM öffnen.|Ponte los AirPods y abre AirPods RPM.
一邊聽喜歡的音樂，一邊看見踩踏節奏。|Enjoy your favorite music and see your cadence.|好きな音楽を聴きながら、ペダリングのリズムを確認。|좋아하는 음악과 함께 페달링 리듬을 확인하세요.|Écoutez votre musique et suivez votre cadence.|Lieblingsmusik hören und Trittfrequenz sehen.|Escucha tu música y consulta tu cadencia.
耳機，照平常戴。|Wear your earbuds.|いつものように装着。|평소처럼 착용.|Portez vos écouteurs.|Kopfhörer wie gewohnt tragen.|Ponte tus auriculares.
連接 AirPods，再開啟 AirPods RPM。|Connect AirPods, then open AirPods RPM.|AirPods を接続して AirPods RPM を開きます。|AirPods를 연결하고 앱을 여세요.|Connectez vos AirPods, puis ouvrez l’app.|AirPods verbinden und die App öffnen.|Conecta los AirPods y abre la app.
手機，放到視線前。|Place your phone in view.|スマートフォンを見やすい位置へ。|휴대폰을 눈앞에.|Placez le téléphone dans votre champ de vision.|Handy im Blickfeld platzieren.|Coloca el móvil a la vista.
把 iPhone 固定在車前，抬眼就能查看數據。|Secure your iPhone on the bike and glance at the data.|iPhone をバイク前方に固定してデータを確認。|iPhone을 자전거 앞에 고정하고 데이터를 확인하세요.|Fixez l’iPhone sur le vélo et consultez les données.|iPhone sicher am Bike befestigen und Daten ablesen.|Fija el iPhone a la bicicleta y consulta los datos.
就這樣，開始踩。|Start pedaling.|さあ、ペダリング開始。|이제 페달을 밟으세요.|Commencez à pédaler.|Einfach lostreten.|Empieza a pedalear.
開始騎乘，依踩踏方式切換坐姿或站姿。|Start riding and select seated or standing mode.|ライドを開始し、シッティング・ダンシングを選択。|라이딩을 시작하고 앉기 또는 서기 모드를 선택하세요.|Démarrez et choisissez le mode assis ou debout.|Fahrt starten und sitzenden oder stehenden Modus wählen.|Inicia la sesión y selecciona el modo sentado o de pie.
RPM 依 AirPods 動作估算，非車上感測器的直接讀值。|RPM is estimated from AirPods motion, not measured by the bike.|RPM は AirPods の動きからの推定値で、バイクの実測値ではありません。|RPM은 AirPods 움직임 기반 추정치이며 자전거 센서 실측값이 아닙니다.|Les RPM sont estimés à partir des AirPods et non mesurés par le vélo.|RPM werden aus AirPods-Bewegungen geschätzt, nicht am Bike gemessen.|Las RPM se estiman con los AirPods, no se miden en la bicicleta.
即時騎乘數據|Live ride data|リアルタイムデータ|실시간 라이딩 데이터|Données en direct|Live-Fahrdaten|Datos en directo
踩踏的每一刻，|Every pedal stroke,|ペダリングの瞬間を、|페달링의 모든 순간,|Chaque coup de pédale,|Jeder Pedaltritt,|Cada pedalada,
一眼掌握。|at a glance.|ひと目で。|한눈에.|en un regard.|auf einen Blick.|de un vistazo.
五項騎乘數據，抬眼就能看見。|Five key metrics, right in view.|5 つのライド指標をひと目で。|다섯 가지 주요 데이터를 한눈에.|Cinq indicateurs, sous vos yeux.|Fünf Kennzahlen direkt im Blick.|Cinco métricas clave a la vista.
估算踏頻|Est. cadence|推定ケイデンス|예상 케이던스|Cadence estimée|Geschätzte Trittfrequenz|Cadencia estimada
即時 RPM|Live RPM|リアルタイム RPM|실시간 RPM|RPM en direct|RPM live|RPM en directo
看見每分鐘的踩踏節奏|See your pedaling rhythm per minute|毎分のペダリングリズムを確認|분당 페달링 리듬 확인|Votre rythme de pédalage par minute|Trittfrequenz pro Minute sehen|Consulta el ritmo por minuto
依 AirPods 動作估算|Estimated from AirPods motion|AirPods の動きから推定|AirPods 움직임 기반 추정|Estimés via les AirPods|Aus AirPods-Bewegungen geschätzt|Estimadas con los AirPods
累計這一趟的運動時間|Track the duration of your session|今回の運動時間を計測|이번 운동 시간 측정|Suivez la durée de la séance|Dauer der Fahrt erfassen|Registra la duración de la sesión
把踩踏節奏換成速度感|Convert cadence into virtual speed|リズムを仮想速度に換算|케이던스를 가상 속도로 환산|Convertit la cadence en vitesse virtuelle|Trittfrequenz in virtuelle Geschwindigkeit umrechnen|Convierte la cadencia en velocidad virtual
每一轉，累積這一趟的里程|Accumulate virtual distance with each revolution|一回転ごとに仮想距離を加算|회전마다 가상 거리 누적|Cumulez la distance virtuelle à chaque tour|Mit jeder Umdrehung virtuelle Distanz sammeln|Acumula distancia virtual con cada vuelta
依騎乘時間與設定費率換算|Estimated from time and configured rate|時間と設定レートから推定|시간과 설정 비율로 추정|Estimation selon la durée et le taux choisi|Schätzung aus Dauer und eingestellter Rate|Estimación según tiempo y tasa configurada
你的騎乘儀表板|Your cycling dashboard|ライドダッシュボード|나의 라이딩 계기판|Votre tableau de bord|Ihr Fahr-Cockpit|Tu panel de ciclismo
轉個方向，|Turn your phone,|向きを変えて、|방향을 돌리면,|Tournez l’écran,|Handy drehen,|Gira la pantalla,
視野就打開。|see more.|視野が広がる。|시야가 넓어집니다.|voyez plus grand.|mehr sehen.|amplía tu vista.
直式、橫式，跟著你的擺放方式。|Portrait or landscape, your choice.|縦向きも横向きも、自由に。|세로 또는 가로, 원하는 방향으로.|Portrait ou paysage, à vous de choisir.|Hoch- oder Querformat nach Wahl.|Vertical u horizontal, tú eliges.
直式儀表板|Portrait dashboard|縦向きダッシュボード|세로 계기판|Tableau de bord vertical|Hochformat-Cockpit|Panel vertical
橫式儀表板|Landscape dashboard|横向きダッシュボード|가로 계기판|Tableau de bord horizontal|Querformat-Cockpit|Panel horizontal
你的騎乘紀錄|Your ride history|あなたのライド履歴|나의 라이딩 기록|Votre historique|Ihr Fahrverlauf|Tu historial
騎完了。|Ride complete.|ライド終了。|라이딩 완료.|Séance terminée.|Fahrt beendet.|Sesión terminada.
這一趟，留下來。|Keep every ride.|このライドを記録。|이번 기록을 남기세요.|Gardez chaque séance.|Jede Fahrt festhalten.|Guarda cada sesión.
保存每一趟騎乘，隨時回顧自己的表現。|Save every ride and review your progress anytime.|ライドを保存し、いつでも振り返る。|매번 저장하고 언제든 돌아보세요.|Enregistrez chaque séance et suivez vos progrès.|Jede Fahrt speichern und jederzeit auswerten.|Guarda cada sesión y revisa tus progresos.
紀錄保存在你的手機，沒有帳號也能開始。|Records stay on your phone. No account needed.|記録は端末に保存。アカウント不要。|기록은 휴대폰에 저장됩니다. 계정이 필요 없어요.|Les données restent sur votre téléphone. Aucun compte requis.|Daten bleiben auf Ihrem Handy. Kein Konto nötig.|Los registros se guardan en tu móvil. Sin cuenta.
戴上 AirPods，開始你的|Wear AirPods and start your|AirPods を装着して、|AirPods를 착용하고|Enfilez vos AirPods et lancez votre|AirPods aufsetzen und die|Ponte los AirPods y comienza tu
下一趟。|next ride.|次のライドへ。|다음 라이딩.|prochaine séance.|nächste Fahrt starten.|próxima sesión.
打開 AirPods RPM，讓踩踏節奏有跡可循。|Open AirPods RPM and follow your cadence.|AirPods RPM で、ペダリングのリズムを記録。|AirPods RPM으로 페달링 리듬을 확인하세요.|Ouvrez AirPods RPM et suivez votre cadence.|AirPods RPM öffnen und Trittfrequenz verfolgen.|Abre AirPods RPM y sigue tu cadencia.
取得 AirPods RPM|Get AirPods RPM|AirPods RPM を入手|AirPods RPM 받기|Obtenir AirPods RPM|AirPods RPM laden|Obtener AirPods RPM
App Store 版本準備中|App Store release coming soon|App Store 版準備中|App Store 출시 준비 중|Bientôt sur l’App Store|App Store-Version in Vorbereitung|Próximamente en App Store
遇到狀況？一起調整。|Need help? Let’s fine-tune.|困ったときは、ご相談ください。|문제가 있나요? 함께 개선해요.|Besoin d’aide ? Parlons-en.|Fragen? Wir helfen.|¿Necesitas ayuda? Hablemos.
查看常見問題|View FAQs|よくある質問を見る|FAQ 보기|Consulter la FAQ|FAQ ansehen|Consultar FAQ
傳送意見回饋|Send feedback|フィードバックを送る|의견 보내기|Envoyer un commentaire|Feedback senden|Enviar comentarios
下一趟，準備中。|Your next ride is coming.|次のライドを準備中。|다음 라이딩 준비 중.|Votre prochaine séance arrive.|Die nächste Fahrt kommt.|Tu próxima sesión se acerca.
AirPods RPM 正在準備 App Store 版本。正式下載連結開放後，這裡就能帶你前往下載。|AirPods RPM is preparing its App Store release. The download link will be available here when released.|AirPods RPM は App Store 版を準備中です。公開後はこちらからダウンロードできます。|AirPods RPM의 App Store 출시를 준비 중입니다. 출시 후 여기에서 다운로드할 수 있습니다.|AirPods RPM prépare sa sortie sur l’App Store. Le lien sera disponible ici.|AirPods RPM bereitet die App Store-Veröffentlichung vor. Der Downloadlink erscheint hier.|AirPods RPM prepara su lanzamiento en App Store. El enlace estará disponible aquí.
分享你的期待|Share your feedback|ご意見を送る|의견 보내기|Partagez vos attentes|Feedback teilen|Comparte tus sugerencias
本頁目錄|Contents|目次|목차|Sommaire|Inhalt|Contenido
點選章節快速閱讀|Jump to a section|章を選択|항목 선택|Accéder à une section|Abschnitt wählen|Ir a una sección
版本日期：2026 年 11 月 23 日|Version date: November 23, 2026|版の日付：2026 年 11 月 23 日|버전 날짜: 2026년 11월 23일|Date : 23 novembre 2026|Stand: 23. November 2026|Fecha: 23 de noviembre de 2026
你的節奏，留在你的手機。這裡清楚說明資料如何使用、保存，以及你可以如何選擇。|Your rhythm stays on your phone. Learn how data is used, stored and managed.|あなたのリズムは端末内に。このページではデータの利用、保存、選択について説明します。|나의 리듬은 휴대폰에 남습니다. 데이터 이용, 저장 및 선택 방법을 안내합니다.|Votre rythme reste sur votre téléphone. Découvrez comment les données sont utilisées et conservées.|Ihr Rhythmus bleibt auf Ihrem Handy. Hier erfahren Sie, wie Daten genutzt und gespeichert werden.|Tu ritmo permanece en tu móvil. Consulta cómo se usan y guardan los datos.
了解 AirPods RPM 提供什麼、數據代表什麼，以及使用服務時的權利與責任。|Learn what AirPods RPM provides, what its data means and your rights and responsibilities.|AirPods RPM の機能、データの意味、利用時の権利と責任について。|AirPods RPM의 기능, 데이터 의미, 이용 시 권리와 책임을 안내합니다.|Découvrez les fonctions, la signification des données et vos droits et responsabilités.|Erfahren Sie, was AirPods RPM bietet, was die Daten bedeuten und welche Rechte und Pflichten gelten.|Conoce las funciones, el significado de los datos y tus derechos y responsabilidades.
先解開問題，|Get answers,|疑問を解決して、|궁금증을 해결하고,|Trouvez vos réponses,|Fragen klären,|Resuelve tus dudas,
再踩進節奏。|then ride.|ライドへ。|라이딩을 시작하세요.|puis pédalez.|dann losfahren.|y pedalea.
從耳機連線到騎乘紀錄，把你想問的說清楚。|From connecting earbuds to ride history, find the answers.|イヤホンの接続からライド履歴まで。|이어폰 연결부터 라이딩 기록까지 안내합니다.|De la connexion des écouteurs à l’historique.|Von der Kopfhörerverbindung bis zum Fahrverlauf.|Desde la conexión de auriculares hasta el historial.
找不到答案？傳送回饋|No answer? Send feedback|解決しない場合はフィードバック|답이 없나요? 의견 보내기|Pas de réponse ? Écrivez-nous|Keine Antwort? Feedback senden|¿No encuentras respuesta? Escríbenos
回到騎乘體驗|Back to the ride|ライド体験へ|라이딩 체험으로|Retour à la séance|Zurück zur Fahrt|Volver a la sesión
正式下載連結開放後，這裡就能帶你前往 App Store。|The App Store link will be available here after release.|公開後はこちらから App Store へ移動できます。|출시 후 여기에서 App Store로 이동할 수 있습니다.|Le lien App Store sera disponible ici à la sortie.|Der App Store-Link erscheint hier nach Veröffentlichung.|El enlace a App Store estará disponible tras el lanzamiento.
AirPods 與 iPhone 為 Apple Inc. 的商標。本產品為獨立開發，非 Apple 官方產品。|AirPods and iPhone are trademarks of Apple Inc. This independently developed product is not an official Apple product.|AirPods と iPhone は Apple Inc. の商標です。本製品は独立開発され、Apple の公式製品ではありません。|AirPods 및 iPhone은 Apple Inc.의 상표입니다. 본 제품은 독립 개발되었으며 Apple 공식 제품이 아닙니다.|AirPods et iPhone sont des marques d’Apple Inc. Ce produit indépendant n’est pas un produit officiel Apple.|AirPods und iPhone sind Marken von Apple Inc. Dieses unabhängige Produkt ist kein offizielles Apple-Produkt.|AirPods y iPhone son marcas de Apple Inc. Este producto independiente no es un producto oficial de Apple.
AirPods 與 iPhone 為 Apple Inc. 的商標。本產品為獨立開發，非 Apple 官方產品。畫面與動畫中的數據為示意。|AirPods and iPhone are trademarks of Apple Inc. This independent product is not an official Apple product. Screens and animations show illustrative data.|AirPods と iPhone は Apple Inc. の商標です。本製品は Apple の公式製品ではありません。画面とアニメーションの数値は例示です。|AirPods 및 iPhone은 Apple Inc.의 상표입니다. Apple 공식 제품이 아닙니다. 화면과 애니메이션의 데이터는 예시입니다.|AirPods et iPhone sont des marques d’Apple Inc. Ce produit indépendant n’est pas officiel. Les données affichées sont illustratives.|AirPods und iPhone sind Marken von Apple Inc. Kein offizielles Apple-Produkt. Bildschirme und Animationen zeigen Beispieldaten.|AirPods y iPhone son marcas de Apple Inc. Este producto independiente no es oficial. Los datos de pantallas y animaciones son ilustrativos.
正在開啟 Google 表單。|Opening Google Forms.|Google フォームを開いています。|Google 설문지를 여는 중입니다.|Ouverture de Google Forms.|Google Forms wird geöffnet.|Abriendo Google Forms.
前往意見回饋表單 ↗|Open feedback form ↗|フィードバックフォームを開く ↗|의견 양식 열기 ↗|Ouvrir le formulaire ↗|Feedbackformular öffnen ↗|Abrir formulario ↗
戴上 AirPods，打開 AirPods RPM，讓 iPhone 成為你的飛輪儀表板。即時查看估算 RPM、切換坐姿與站姿，並保存每一趟騎乘紀錄。|Turn your iPhone into an indoor cycling dashboard with compatible AirPods: live estimated RPM, seated and standing modes, and ride history.|対応する AirPods で iPhone を室内サイクリングのダッシュボードに。推定 RPM、座位・立位モード、履歴を表示。|호환 AirPods로 iPhone을 실내 자전거 계기판으로. 실시간 추정 RPM, 앉기·서기 모드, 라이딩 기록.|Transformez votre iPhone en tableau de bord indoor : RPM estimés en direct, modes assis et debout et historique.|Machen Sie Ihr iPhone mit kompatiblen AirPods zum Indoor-Cycling-Cockpit: geschätzte RPM, Sitz- und Stehmodus und Verlauf.|Convierte tu iPhone con AirPods compatibles en un panel indoor: RPM estimadas, modos sentado y de pie e historial.
戴著 AirPods 的騎乘者在室內腳踏車上踩踏，手機架在把手前方|Rider with AirPods on an indoor bike, phone mounted on the handlebars|AirPods を装着した室内バイクのライダーと固定されたスマートフォン|AirPods를 착용한 실내 라이더와 고정된 휴대폰|Cycliste avec AirPods et téléphone fixé au guidon|Indoor-Radfahrer mit AirPods und Handy am Lenker|Ciclista con AirPods y móvil fijado al manillar
從騎乘者上方俯視：戴著 AirPods，雙手握住把手，雙腳踩踏，iPhone 固定在中間的支架上|Overhead view of an indoor rider wearing AirPods, with iPhone mounted centrally|AirPods を装着してペダルをこぐライダーの俯瞰図|AirPods를 착용하고 페달을 밟는 라이더의 위쪽 시점|Vue de dessus d’un cycliste avec AirPods et iPhone fixé au centre|Draufsicht auf einen Fahrer mit AirPods und mittig befestigtem iPhone|Vista cenital del ciclista con AirPods y iPhone fijado al centro
AirPods RPM 儀表板，顯示踏頻、騎乘時間、虛擬距離、虛擬速度與估算熱量|Dashboard showing cadence, duration, virtual distance, virtual speed and estimated calories|ケイデンス、時間、仮想距離・速度、推定カロリーを表示|케이던스, 시간, 가상 거리·속도, 예상 칼로리 계기판|Cadence, durée, distance et vitesse virtuelles, calories estimées|Cockpit mit Trittfrequenz, Zeit, virtueller Distanz und Geschwindigkeit, Kalorienschätzung|Panel con cadencia, tiempo, distancia y velocidad virtuales y calorías estimadas
手機版俯視騎乘示意，手機固定在握把支架上，騎乘者戴著耳機踩踏|Overhead illustration of a rider and mounted phone|スマートフォンを固定したライダーの俯瞰イラスト|휴대폰을 고정한 라이더의 위쪽 시점|Illustration du cycliste et du téléphone fixé|Illustration eines Fahrers mit befestigtem Handy von oben|Ilustración cenital del ciclista y el móvil
戴著 AirPods 的騎乘者握住把手，放大的手機固定在中央支架|Rider wearing AirPods with phone mounted centrally|AirPods を装着したライダーと中央のスマートフォン|AirPods를 착용한 라이더와 중앙의 휴대폰|Cycliste portant des AirPods avec téléphone au centre|Fahrer mit AirPods und mittig befestigtem Handy|Ciclista con AirPods y móvil en el centro
AirPods RPM 即時儀表板示意|AirPods RPM live dashboard example|AirPods RPM ダッシュボードの例|AirPods RPM 실시간 계기판 예시|Exemple du tableau de bord AirPods RPM|Beispiel des AirPods RPM Cockpits|Ejemplo del panel AirPods RPM
AirPods RPM 直式儀表板，數值已調整為示範資料|Portrait dashboard with sample values|縦向きダッシュボード、サンプルデータ|세로 계기판, 예시 데이터|Tableau de bord vertical, valeurs d’exemple|Hochformat-Cockpit mit Beispieldaten|Panel vertical con datos de ejemplo
AirPods RPM 橫式儀表板，數值已調整為示範資料|Landscape dashboard with sample values|横向きダッシュボード、サンプルデータ|가로 계기판, 예시 데이터|Tableau de bord horizontal, valeurs d’exemple|Querformat-Cockpit mit Beispieldaten|Panel horizontal con datos de ejemplo
AirPods RPM 真實騎乘紀錄介面，騎乘時間與數值已調整為示範資料|Ride history interface with sample values|ライド履歴画面、サンプルデータ|라이딩 기록 화면, 예시 데이터|Historique avec valeurs d’exemple|Fahrverlauf mit Beispieldaten|Historial con datos de ejemplo
關於 AirPods 連接、節奏估算、直橫式畫面與騎乘紀錄，你想知道的事。|Answers about connecting AirPods, cadence estimates, orientation and ride history.|AirPods の接続、推定ケイデンス、画面方向、ライド履歴について。|AirPods 연결, 케이던스 추정, 화면 방향 및 기록에 대한 답변.|Réponses sur les AirPods, la cadence estimée, l’orientation et l’historique.|Antworten zu AirPods-Verbindung, Trittfrequenz, Ausrichtung und Verlauf.|Respuestas sobre conexión, estimación de cadencia, orientación e historial.
告訴我們你的騎乘體驗，協助調整 AirPods RPM。|Tell us about your ride and help improve AirPods RPM.|ライドの感想をお聞かせください。|라이딩 경험을 공유해 주세요.|Parlez-nous de votre expérience pour améliorer AirPods RPM.|Teilen Sie Ihre Erfahrungen und helfen Sie uns bei der Verbesserung.|Cuéntanos tu experiencia para mejorar AirPods RPM.
`.trim().split('\n');
  rows.forEach(row=>{const [key,...values]=row.split('|');languages.forEach((l,i)=>all[l].ui[key]=values[i]);});
  for(const l of languages) {
    const u=all[l].ui;
    ['使用條款','隱私政策','常見問題','意見回饋'].forEach(t=>u[t+' — AirPods RPM']=u[t]+' — AirPods RPM');
    u['AirPods RPM — 戴上 AirPods，即時看見 RPM']='AirPods RPM — '+u['即時查看 RPM'];
    u['主導覽']=u['本頁目錄'];u['頁尾導覽']=u['本頁目錄'];u['切換騎乘情境']=u['騎乘紀錄'];u['AirPods RPM 首頁']='AirPods RPM';
  }
})();
