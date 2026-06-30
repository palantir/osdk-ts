import{R as i,O as M,j as y,M as v}from"./iframe-BsO9h7r8.js";import{P as D}from"./pdf-viewer-DfiLq2kp.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CrYVvgnt.js";import"./preload-helper-kVh9WRV0.js";import"./PdfRenderer-h6HYQi-G.js";import"./index-CJL1LSNA.js";import"./PdfViewer-BxiU4fnR.js";import"./PdfViewer.module.css-mZuQD6wh.js";import"./PdfViewerAnnotationLayer-B2cLndHQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKKAJs1U.js";import"./PdfViewerOutlineSidebar-DLoTIRpe.js";import"./PdfViewerSidebarHeader-B41X9qT5.js";import"./useBaseUiId-C3b_hb9v.js";import"./useControlled-DsZtwBPI.js";import"./CompositeRoot-BzVej3uq.js";import"./CompositeItem-qHn-BG8m.js";import"./ToolbarRootContext-DOzJL68x.js";import"./composite-D3AxlFmD.js";import"./svgIconContainer-BA1JCxVV.js";import"./PdfViewerSearchBar-57oFG7XR.js";import"./chevron-up-DcSNwuo8.js";import"./chevron-down-BmFA167U.js";import"./cross-BgBdTUJe.js";import"./PdfViewerSidebar-iCyCI8Yz.js";import"./index-C3LlK2nW.js";import"./index-NWo1xhbl.js";import"./index-S8QS8NVb.js";import"./PdfViewerToolbar-C09Qku_I.js";import"./Button-Dch8Yneq.js";import"./chevron-right-EY-asof3.js";import"./Input-D4YvEVW6.js";import"./minus-CeZarIAf.js";import"./search-dIsWNuhQ.js";import"./spin-fxphIrSk.js";import"./error-DdfCZKxk.js";import"./withOsdkMetrics-Ded3pGJc.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
