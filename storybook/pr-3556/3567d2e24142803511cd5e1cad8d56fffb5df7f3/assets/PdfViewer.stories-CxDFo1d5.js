import{R as i,O as M,j as y,M as v}from"./iframe-DGo07w8p.js";import{P as D}from"./pdf-viewer-RaSDM1QQ.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-nWmFRsIS.js";import"./preload-helper-Uw55Y6Co.js";import"./PdfRenderer-CXbcmiOW.js";import"./index-CiNz-q6a.js";import"./PdfViewer-DwdR6a_7.js";import"./PdfViewer.module.css-JUSaJnVO.js";import"./PdfViewerAnnotationLayer-BpQ2wZdH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BqWpZQhW.js";import"./PdfViewerOutlineSidebar-BJT7ZhFb.js";import"./PdfViewerSidebarHeader-BNOjc6M2.js";import"./useBaseUiId-yA5slOAd.js";import"./useControlled-DxZGBcfU.js";import"./CompositeRoot-BGmB5NVo.js";import"./CompositeItem-C4-Z5Srk.js";import"./ToolbarRootContext-B93l1jp6.js";import"./composite-lFcGW0lr.js";import"./svgIconContainer-DFOet5FR.js";import"./PdfViewerSearchBar-BDvNyWzK.js";import"./chevron-up-BCx8ikS6.js";import"./chevron-down-JfCyh0SF.js";import"./cross-CkNwX2aH.js";import"./PdfViewerSidebar-C9l4lmVd.js";import"./index-luu41Jl3.js";import"./index-COgZHH-Q.js";import"./index-B9_zeMbg.js";import"./PdfViewerToolbar-C2p9z69T.js";import"./Button-5Q1LlazT.js";import"./chevron-right-DLsFHKE8.js";import"./Input-B5rB6lkx.js";import"./minus-DUUMzs7N.js";import"./spin-fMttZhFn.js";import"./error-BA68o8ir.js";import"./withOsdkMetrics-CRNSOb-2.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
