import{R as i,O as M,j as y,M as v}from"./iframe-DVX-iFxA.js";import{P as D}from"./pdf-viewer-Bgr49N1V.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DajWivXx.js";import"./preload-helper-0vGU7s_D.js";import"./PdfRenderer-Ck0EJF60.js";import"./index-Cn2uYV9E.js";import"./PdfViewer-DRL9upX5.js";import"./PdfViewer.module.css-ZoEaafDr.js";import"./PdfViewerAnnotationLayer-DM4COhUs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0TOSH4yu.js";import"./PdfViewerOutlineSidebar-BxwULXyS.js";import"./PdfViewerSidebarHeader-BPQiKniF.js";import"./useBaseUiId-gG8bMQPn.js";import"./useControlled-N-Q3L4ZY.js";import"./CompositeRoot-DTpc0khG.js";import"./CompositeItem-K4e5xRVi.js";import"./ToolbarRootContext-Dm77GgFm.js";import"./composite-MKnWREQg.js";import"./svgIconContainer-DIvvaSR0.js";import"./PdfViewerSearchBar-DQUGFdw6.js";import"./chevron-up-ThXrWDww.js";import"./chevron-down-DOZ4R2pO.js";import"./cross-AKBZlCYC.js";import"./PdfViewerSidebar-DJJYOBRf.js";import"./index-CtKd7cJN.js";import"./index-Bl00HuKQ.js";import"./index-CZtUkVEM.js";import"./PdfViewerToolbar-BD9E4Nuj.js";import"./Button-BWp2sCa_.js";import"./chevron-right-Ctpdr5UF.js";import"./Input-B_-bU7zr.js";import"./spin-CsWN9dBZ.js";import"./error-CaTMSZaC.js";import"./withOsdkMetrics-BmY_UP3P.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ue={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const ye=["Default"];export{a as Default,ye as __namedExportsOrder,ue as default};
