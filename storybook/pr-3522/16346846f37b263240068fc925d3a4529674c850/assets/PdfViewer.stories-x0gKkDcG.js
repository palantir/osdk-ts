import{R as i,O as M,j as y,M as v}from"./iframe-LgxWIvAh.js";import{P as D}from"./pdf-viewer-qeeWeQni.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-Bz-MMEvb.js";import"./preload-helper-BKTxyjMX.js";import"./PdfRenderer-EuduQK23.js";import"./index-jVQz_y1l.js";import"./PdfViewer-C-LT9Ixo.js";import"./PdfViewer.module.css-CQh4jBF7.js";import"./PdfViewerAnnotationLayer-Cq9i9Koo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DgIlkq7g.js";import"./PdfViewerOutlineSidebar-Bm2miFiu.js";import"./PdfViewerSidebarHeader-B2usUMhp.js";import"./useBaseUiId-B0JyaV1q.js";import"./useControlled-BnUeF2hJ.js";import"./CompositeRoot-TYxeGmqg.js";import"./CompositeItem-DotNC9t1.js";import"./ToolbarRootContext-DgJAa3hM.js";import"./composite-X3e3esOg.js";import"./svgIconContainer-C4LlDx6S.js";import"./PdfViewerSearchBar-By4F8Wkh.js";import"./chevron-up-CctsO_iU.js";import"./chevron-down-DUJVW_to.js";import"./cross-BmrQP5kf.js";import"./PdfViewerSidebar-B0IK0X9I.js";import"./index-DPpg187b.js";import"./index-6NU5zT2x.js";import"./index-aRK4Hsgt.js";import"./PdfViewerToolbar-DUICUKUn.js";import"./Button-DCWDV2eA.js";import"./chevron-right-Bgv9MH0B.js";import"./Input-DSuaLQwi.js";import"./minus-DyqblHDT.js";import"./search-QryvcXV_.js";import"./spin-57bZc9Wp.js";import"./error-DiWpnJ3I.js";import"./withOsdkMetrics-Bb7B8tU3.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
