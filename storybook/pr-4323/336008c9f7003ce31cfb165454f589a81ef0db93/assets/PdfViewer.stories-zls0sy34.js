import{j as r,M as s}from"./iframe-Dy3pbGVl.js";import{P as p}from"./pdf-viewer-BjE-VWAr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXYPw2iy.js";import"./preload-helper-CpAlczou.js";import"./PdfViewer-CxRRZRA_.js";import"./index-BGynA5Ey.js";import"./BasePdfViewer-DoqkP_Lf.js";import"./BasePdfViewer.module.css-CWgrYCtF.js";import"./PdfViewerAnnotationLayer-BtFCius2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQ2mT6Lq.js";import"./PdfViewerOutlineSidebar-1ztU1utp.js";import"./PdfViewerSidebarHeader-C_p3J4yi.js";import"./useBaseUiId-1GhcXjBj.js";import"./useControlled-CHjpObPc.js";import"./CompositeRoot-1DflDt2z.js";import"./CompositeItem-BeUctUoU.js";import"./ToolbarRootContext-B0Ul7YuG.js";import"./composite-DD7PMic6.js";import"./svgIconContainer-DwcpIzbz.js";import"./PdfViewerSearchBar-BFMbYMYQ.js";import"./chevron-up-UghmMVpH.js";import"./chevron-down-8plcDTLG.js";import"./cross-_ffwL7On.js";import"./PdfViewerSidebar-Bcoq6MS0.js";import"./index-TQ3K22OR.js";import"./index-rQvGOKiy.js";import"./index-B3hOY3C5.js";import"./PdfViewerToolbar-BSrBeE8p.js";import"./Button-ByPi26fD.js";import"./chevron-right-B1lhDpZR.js";import"./Input-Ddh63PuK.js";import"./search-CRVUm7gt.js";import"./spin-CgqEVano.js";import"./error-C7pYFxix.js";import"./withOsdkMetrics-DtiZVH3G.js";import"./makeExternalStore-WrhHs9Vh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
