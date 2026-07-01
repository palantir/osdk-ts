import{R as i,O as M,j as y,M as v}from"./iframe-CKFk0arE.js";import{P as D}from"./pdf-viewer-COD46t28.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DbZaAZFO.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-KaOoN1o3.js";import"./index-BjQgtYP9.js";import"./PdfViewer-n2TR7Mm3.js";import"./PdfViewer.module.css-Bi8TUFRt.js";import"./PdfViewerAnnotationLayer-BP3nfWOE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gkh3ki_h.js";import"./PdfViewerOutlineSidebar-dLqCu6_6.js";import"./PdfViewerSidebarHeader-BkY6waui.js";import"./useBaseUiId-DAw5VlH9.js";import"./useControlled-BmBr0tvV.js";import"./CompositeRoot-DPvVZKCj.js";import"./CompositeItem-2K-NRXeL.js";import"./ToolbarRootContext-DC7lKy46.js";import"./composite-EscgZUjl.js";import"./svgIconContainer-BAT-Ac90.js";import"./PdfViewerSearchBar-B4rzER2j.js";import"./chevron-up-BxD9mORz.js";import"./chevron-down-CdZBYj4j.js";import"./cross-fbZdFG_D.js";import"./PdfViewerSidebar-BC4m_809.js";import"./index-rXGyYBlQ.js";import"./index-BLoK5Iyu.js";import"./index-BPzeTJNp.js";import"./PdfViewerToolbar-B46H0-0E.js";import"./Button-c1BMMVFp.js";import"./chevron-right-vwsxq-Tf.js";import"./Input-VZxUx3mR.js";import"./minus-BiUPw5-m.js";import"./search-BLu0EWyQ.js";import"./spin-BIcVLev0.js";import"./error-BaydBvcG.js";import"./withOsdkMetrics-CSIAdfM7.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
