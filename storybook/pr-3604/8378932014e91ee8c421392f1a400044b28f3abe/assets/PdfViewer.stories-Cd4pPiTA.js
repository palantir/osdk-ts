import{R as i,O as M,j as y,M as v}from"./iframe-DJLCfr4f.js";import{P as D}from"./pdf-viewer-BB6vDfUe.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-5qNfikfb.js";import"./preload-helper-DpagtCf2.js";import"./PdfRenderer-DjnAEzR0.js";import"./index-D4IE3gNI.js";import"./PdfViewer-BFoZVI09.js";import"./PdfViewer.module.css-DgKL5qNa.js";import"./PdfViewerAnnotationLayer-B1n4eceC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbJIBdNa.js";import"./PdfViewerOutlineSidebar-DKDmiKTd.js";import"./PdfViewerSidebarHeader-BpesCtT0.js";import"./useBaseUiId-mPnrHgef.js";import"./useControlled-BYFtKtxD.js";import"./CompositeRoot-CnBNxV_y.js";import"./CompositeItem-RoymjbRG.js";import"./ToolbarRootContext-Pl6BjqXh.js";import"./composite-WH4q331F.js";import"./svgIconContainer-RYJm0FsG.js";import"./PdfViewerSearchBar-C8uniERO.js";import"./chevron-up-CC_omgK0.js";import"./chevron-down-BCTFTdUl.js";import"./cross-BxHgtQzu.js";import"./PdfViewerSidebar-CPmaE-Sm.js";import"./index-IP7NxQqP.js";import"./index-Bi6UFZeo.js";import"./index-B9j4W-bs.js";import"./PdfViewerToolbar-CiHU7im8.js";import"./Button-C4cfPyjV.js";import"./chevron-right-BvnchqIl.js";import"./Input-BGq0Lo3d.js";import"./minus-rc1h5CgO.js";import"./search-Cuy61ubn.js";import"./spin-DJVo7zVv.js";import"./error-Ci8d6I91.js";import"./withOsdkMetrics-D22DKovY.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
