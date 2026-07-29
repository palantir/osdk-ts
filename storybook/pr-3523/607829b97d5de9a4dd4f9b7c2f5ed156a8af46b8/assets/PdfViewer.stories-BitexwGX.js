import{R as i,O as M,j as y,M as v}from"./iframe-DW5haiqE.js";import{P as D}from"./pdf-viewer-BbWPUjN7.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CRp4eHSV.js";import"./preload-helper-DVKA9px6.js";import"./PdfRenderer-CZefCloi.js";import"./index-xjAgWE80.js";import"./PdfViewer-WdoUy5qa.js";import"./PdfViewer.module.css-_To5dWtI.js";import"./PdfViewerAnnotationLayer-DI7-PoAA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-RhXhA08k.js";import"./PdfViewerOutlineSidebar-TICc6Cn9.js";import"./PdfViewerSidebarHeader-DQrvWDg6.js";import"./useBaseUiId-CvU9jtB4.js";import"./useControlled-klrfy2e5.js";import"./CompositeRoot-7nBq9GUc.js";import"./CompositeItem-BTy4FVkA.js";import"./ToolbarRootContext-DxbxBlN-.js";import"./composite-CbaFILzo.js";import"./svgIconContainer-CEP856Ty.js";import"./PdfViewerSearchBar-CqBil0eV.js";import"./chevron-up-BJXfwveG.js";import"./chevron-down-CVV46y4F.js";import"./cross-Ce5L2vs3.js";import"./PdfViewerSidebar-DkKR-1J7.js";import"./index-wvYSg08r.js";import"./index-_rIVvBJF.js";import"./index-BisFlCA8.js";import"./PdfViewerToolbar-CbU6JM_I.js";import"./Button-Dl8_S-nu.js";import"./chevron-right-BJwr8ksq.js";import"./Input-BldVSmgU.js";import"./minus-BAU68G9T.js";import"./spin-lIv5UWu6.js";import"./error-BuErwVjw.js";import"./withOsdkMetrics-C_3kcjB2.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
