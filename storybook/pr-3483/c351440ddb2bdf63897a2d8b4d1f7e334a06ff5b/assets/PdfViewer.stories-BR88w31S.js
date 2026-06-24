import{R as i,O as M,j as y,M as v}from"./iframe-CkQZcnH2.js";import{P as D}from"./pdf-viewer-DtpvMpoU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DEJLLiQC.js";import"./preload-helper-CljnlcDv.js";import"./PdfRenderer-B3sXB7Tc.js";import"./index-VVlN0jvd.js";import"./PdfViewer-DwOSL_NY.js";import"./PdfViewer.module.css-BE_tgper.js";import"./PdfViewerAnnotationLayer-BHtEsnGe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDAekb-Q.js";import"./PdfViewerOutlineSidebar-CjwS183P.js";import"./PdfViewerSidebarHeader-RpLP9ULk.js";import"./useBaseUiId-DVZXOiRt.js";import"./useControlled-D3yTP8QU.js";import"./CompositeRoot-BiZR0_29.js";import"./CompositeItem-vowMVFYI.js";import"./ToolbarRootContext-D2z5WJh1.js";import"./composite-u2NZBRF_.js";import"./svgIconContainer-Br1nC1Of.js";import"./PdfViewerSearchBar-Dkft4h4Q.js";import"./chevron-up-eSvomitZ.js";import"./chevron-down-CASSpbpI.js";import"./cross-DZ7IUewz.js";import"./PdfViewerSidebar-BFNeAr1P.js";import"./index-DqOl1-jR.js";import"./index-DsjiD0wB.js";import"./index-vfid0is-.js";import"./PdfViewerToolbar-w4S8sQ3l.js";import"./Button-2issX0HJ.js";import"./chevron-right-BxGwj5GQ.js";import"./Input-Crju91xE.js";import"./minus-ANa26wQM.js";import"./spin-DhBj-g0m.js";import"./error-CQhWb91W.js";import"./withOsdkMetrics-BtHjUR6o.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
