import{R as i,O as w,j as y,M}from"./iframe-DTte42TN.js";import{P as D}from"./pdf-viewer-YP3L6bqH.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-BkAk1cHv.js";import"./preload-helper-BNV0JvnW.js";import"./PdfRenderer-a-00gJGA.js";import"./index-DaKu6MNl.js";import"./PdfViewer-DwOqnjVF.js";import"./PdfViewer.module.css-YDPoQNPH.js";import"./PdfViewerAnnotationLayer-t-1x-nBM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DlrqQC7R.js";import"./PdfViewerOutlineSidebar-BvCDK0zF.js";import"./PdfViewerSidebarHeader-CZ9bMt-V.js";import"./useBaseUiId-DKVf16mW.js";import"./useControlled-BeMzZ5ZS.js";import"./CompositeRoot-Rsd7Jfb9.js";import"./CompositeItem-DMisq4Ng.js";import"./ToolbarRootContext-SRY981j9.js";import"./composite-Cd-uAhso.js";import"./svgIconContainer-fTXZBWb-.js";import"./PdfViewerSearchBar-BfMzJc2D.js";import"./chevron-up-BW4R2Xld.js";import"./chevron-down-1rjhnzJt.js";import"./cross-B2IlTQte.js";import"./PdfViewerSidebar-DYFoDzeb.js";import"./index-Bt72SKOe.js";import"./index-DPZg1C5E.js";import"./index-DmoGEWEu.js";import"./PdfViewerToolbar-BR00LV5-.js";import"./Button-iZRfGawq.js";import"./chevron-right-DR-zy-e8.js";import"./Input-DBVHNcNB.js";import"./minus-Dj8ghmf7.js";import"./spin-C_jtD2df.js";import"./error-B9jorsxS.js";import"./withOsdkMetrics-DLRxvEB6.js";function L(...t){const{observableClient:m}=i.useContext(w),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:v}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,v),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,M);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
