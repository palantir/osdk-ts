import{R as i,O as M,j as y,M as v}from"./iframe-Be_ym5-I.js";import{P as D}from"./pdf-viewer-BNynyrzr.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CYoD3wwS.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-8YmrMzLH.js";import"./index-CqRwur0p.js";import"./PdfViewer-DM5hP0tt.js";import"./PdfViewer.module.css-Cp7x1qB7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cp9v-7S-.js";import"./index-CprYy9VH.js";import"./index-B9PoFSjN.js";import"./PdfViewerAnnotationLayer-8NdTxHmh.js";import"./PdfViewerOutlineSidebar-BxCSX7ZO.js";import"./PdfViewerSidebarHeader-qGsvmSnu.js";import"./useBaseUiId-Bf4jPO7W.js";import"./useControlled-CNT3pXrD.js";import"./CompositeRoot-Rby1BdH1.js";import"./CompositeItem-DuAEE2cJ.js";import"./ToolbarRootContext-DVQ7cmBr.js";import"./composite-3X7QonjR.js";import"./svgIconContainer-BUk3BvJi.js";import"./PdfViewerSearchBar-S75UxGro.js";import"./chevron-up-9Hv79PMm.js";import"./chevron-down-DmVridg1.js";import"./cross-B4iPD0mL.js";import"./PdfViewerSidebar-CZH44B7F.js";import"./index-DoxLx3SJ.js";import"./PdfViewerToolbar-fgUgu9WS.js";import"./Button-DvmIXN89.js";import"./chevron-right-CCdsk3HQ.js";import"./Input-BqBjIQtO.js";import"./minus-mWQ_aBV_.js";import"./spin-BnXgASEW.js";import"./error-C2qZlKQ5.js";import"./withOsdkMetrics-_pUD6AnQ.js";import"./useRegisterUserAgent-BFvFnebL.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
