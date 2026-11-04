import{j as r,M as s}from"./iframe-C-_1TazU.js";import{P as p}from"./pdf-viewer-CclsLDkg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DjIBrXN5.js";import"./preload-helper-CkKF1Buf.js";import"./PdfViewer-DG_tVzTv.js";import"./index-Bpncd7pQ.js";import"./BasePdfViewer-N-K4TQH-.js";import"./BasePdfViewer.module.css-DQNGzcAc.js";import"./PdfViewerAnnotationLayer-BFCVUIeV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BH9GuDQT.js";import"./PdfViewerOutlineSidebar-DuiG7mmx.js";import"./PdfViewerSidebarHeader-Bp-nu_ld.js";import"./useBaseUiId-_AW1QpO6.js";import"./useControlled-B0TcQP9p.js";import"./CompositeRoot-k6cvQfJg.js";import"./CompositeItem-CUiyh8KX.js";import"./ToolbarRootContext-DKRIHX6q.js";import"./composite-Dz3hbzMM.js";import"./svgIconContainer-CMraZsuF.js";import"./PdfViewerSearchBar-lIR3uzsk.js";import"./chevron-up-BY-Dd_yL.js";import"./chevron-down-C9eSOQPA.js";import"./cross-C4V96JZV.js";import"./PdfViewerSidebar-CpEIJL7U.js";import"./index-BbmPsGxd.js";import"./index-BubkWFVt.js";import"./index-CMC--zdt.js";import"./PdfViewerToolbar-Bgrj-qrx.js";import"./Button-3Z_BNFpX.js";import"./chevron-right-BmEvrvBV.js";import"./Input-CRdjsgvE.js";import"./search-Brf_HBSH.js";import"./spin-AylexS64.js";import"./error-Bm-o3dV9.js";import"./withOsdkMetrics-DfOFosKa.js";import"./makeExternalStore-Bt0DPf8S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
