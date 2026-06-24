import{R as i,O as M,j as y,M as v}from"./iframe-BNuIjDY_.js";import{P as D}from"./pdf-viewer-Bjr_HR2z.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CfK6RCzK.js";import"./preload-helper-Bmqw3hhX.js";import"./PdfRenderer-Bv2B8z__.js";import"./index-gQPV0uwI.js";import"./PdfViewer-CRFJf2iS.js";import"./PdfViewer.module.css-B_p7Ask2.js";import"./constants-B8f3UZHi.js";import"./usePdfDocument-Bnw7OfPu.js";import"./index-CZhc2LCN.js";import"./index-_TiBVugO.js";import"./PdfViewerAnnotationLayer-DmQJqPWZ.js";import"./PdfViewerOutlineSidebar-BZ27nOub.js";import"./PdfViewerSidebarHeader-CYK7WmXw.js";import"./useBaseUiId-CFvY5CSG.js";import"./useControlled-Cou4mL4y.js";import"./CompositeRoot-hhba1jpV.js";import"./CompositeItem-DU7m5uqr.js";import"./ToolbarRootContext-D33H9Odx.js";import"./composite-DMEcxwdO.js";import"./svgIconContainer-Bg9AU8D6.js";import"./PdfViewerSearchBar-pa15y25i.js";import"./chevron-up-Cw5BdxIM.js";import"./chevron-down-Djbw7R9Y.js";import"./cross-CNIz3MDZ.js";import"./PdfViewerSidebar-BnjhfWrs.js";import"./index-3lj4x2oE.js";import"./PdfViewerToolbar-B4oKCjrR.js";import"./Button-DUQuscsP.js";import"./chevron-right-DyngafZB.js";import"./Input-J6e4fSF2.js";import"./minus-CVUNEp0F.js";import"./spin-CXDbk9IJ.js";import"./error-uDiMRQDa.js";import"./withOsdkMetrics-BtWALzn7.js";import"./useRegisterUserAgent-rYLyqU88.js";function L(...t){const{observableClient:s}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,m=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof m=="string"?m:m.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>s.observeObject(m,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,s,m,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Beta/DocumentViewer/Renderers/PdfViewer",component:D,parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:s}=L(K,v);return s||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
