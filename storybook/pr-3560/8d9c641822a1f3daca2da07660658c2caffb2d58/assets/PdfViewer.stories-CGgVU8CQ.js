import{R as i,O as M,j as y,M as v}from"./iframe-BcY103pq.js";import{P as D}from"./pdf-viewer-D0d-4JKF.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BqdcM3fH.js";import"./preload-helper-CJP2zoNP.js";import"./PdfRenderer-BhTe-NKt.js";import"./index-DA-g1Ciy.js";import"./PdfViewer-BUTbB3ew.js";import"./PdfViewer.module.css--H1jP-3E.js";import"./PdfViewerAnnotationLayer-COSM7vVw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Kj6y6onL.js";import"./PdfViewerOutlineSidebar-BPQ_eWoh.js";import"./PdfViewerSidebarHeader-C9J7GBz0.js";import"./useBaseUiId-BoZrpPzk.js";import"./useControlled-AOm1PlVZ.js";import"./CompositeRoot-D1R2zcw2.js";import"./CompositeItem-FyK97BZ9.js";import"./ToolbarRootContext-tHrQMUDQ.js";import"./composite-CLV6W6dc.js";import"./svgIconContainer-WUryhlJd.js";import"./PdfViewerSearchBar-D2twtnE2.js";import"./chevron-up-CGRcmPgE.js";import"./chevron-down-B6g8Iii5.js";import"./cross-CM51o3Of.js";import"./PdfViewerSidebar-Bb5e4JY8.js";import"./index-HsmHBn9G.js";import"./index-B1zie9Yb.js";import"./index-Cf6-jKZO.js";import"./PdfViewerToolbar-BdnvycNn.js";import"./Button-DGjow146.js";import"./chevron-right-Ci2n8l0l.js";import"./Input-PTZNblo7.js";import"./minus-iLMQbXok.js";import"./spin-D-Oka53w.js";import"./error-GFWyuojU.js";import"./withOsdkMetrics-DHoq9PvA.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
