import{j as r,M as s}from"./iframe-B7YfKj_r.js";import{P as p}from"./pdf-viewer-BlWIVkIn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjZfFZUe.js";import"./preload-helper-zLh7gNhX.js";import"./PdfRenderer-ABGnjTey.js";import"./index-CbJ6-D60.js";import"./PdfViewer-x8kGRy92.js";import"./PdfViewer.module.css-DnuHD8Ny.js";import"./PdfViewerAnnotationLayer-BP6Pkg_p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuTNo5s1.js";import"./PdfViewerOutlineSidebar-DV9Yyx-7.js";import"./PdfViewerSidebarHeader-CEXE-kf1.js";import"./useBaseUiId-BdhKr30W.js";import"./useControlled-n47txmPS.js";import"./CompositeRoot--5CrV8Rt.js";import"./CompositeItem-DCU6fW8B.js";import"./ToolbarRootContext-BNxVHquj.js";import"./composite-DPXSfqsf.js";import"./svgIconContainer-Cz-PKCx4.js";import"./PdfViewerSearchBar-rSTKNsWn.js";import"./chevron-up-DCJABVQX.js";import"./chevron-down-CEfOWXYF.js";import"./cross-0p6Vac4C.js";import"./PdfViewerSidebar-BzHO0rNo.js";import"./index-DO5HNGTZ.js";import"./index-BnfXHeb4.js";import"./index-s7UAVR_E.js";import"./PdfViewerToolbar-2SUhZ5-j.js";import"./Button-OvcAa909.js";import"./chevron-right-D8D8y0Gc.js";import"./Input-CH_xkTTH.js";import"./search-Gvi_C_xs.js";import"./spin-CDYCQEV1.js";import"./error-CsyKVqOH.js";import"./withOsdkMetrics-C_jrvusq.js";import"./makeExternalStore-qy5hPVIr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
