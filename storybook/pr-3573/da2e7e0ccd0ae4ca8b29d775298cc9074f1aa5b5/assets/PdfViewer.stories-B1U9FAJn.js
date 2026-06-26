import{R as i,O as M,j as y,M as v}from"./iframe-C_1Lo6vx.js";import{P as D}from"./pdf-viewer-TR6HzGOg.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B7Os3AUy.js";import"./preload-helper-BJeu9M3_.js";import"./PdfRenderer-Ce5lPw9-.js";import"./index-CiIER5WL.js";import"./PdfViewer-CSUbjd8B.js";import"./PdfViewer.module.css-BcWnNPJD.js";import"./PdfViewerAnnotationLayer-CQzW9zSl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDP6wVxq.js";import"./PdfViewerOutlineSidebar-D5JN6Bmj.js";import"./PdfViewerSidebarHeader-7r7_xw5Q.js";import"./useBaseUiId-DNGH9vxz.js";import"./useControlled-BSDavnra.js";import"./CompositeRoot-DH3ACAcD.js";import"./CompositeItem-DQ-k6_Qh.js";import"./ToolbarRootContext-DbBADNWY.js";import"./composite-Dd8NyeIp.js";import"./svgIconContainer-Dx58van2.js";import"./PdfViewerSearchBar-Bh6i_fOo.js";import"./chevron-up-DHKRblK7.js";import"./chevron-down-De4ww-L7.js";import"./cross-BgQvhrmk.js";import"./PdfViewerSidebar-DFRXM-Ya.js";import"./index-CMeVHhZD.js";import"./index-DFn5EXXq.js";import"./index-ySNa2Pv6.js";import"./PdfViewerToolbar-BMdPSisk.js";import"./Button-B2neH2r7.js";import"./chevron-right-hIH8aQRL.js";import"./Input-CdvyZo2L.js";import"./minus-BoD3E1-B.js";import"./search-K4efN6Zt.js";import"./spin-CEqrzpZb.js";import"./error-CWqG0RB_.js";import"./withOsdkMetrics-CgaJOJjb.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
