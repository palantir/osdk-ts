import{j as r,M as s}from"./iframe-HPloXe9j.js";import{P as p}from"./pdf-viewer-Bf363peA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DdjpTomg.js";import"./preload-helper-DScJgkz5.js";import"./PdfViewer-qPq3aezZ.js";import"./index-CYy51o6d.js";import"./BasePdfViewer-D1tm2SK-.js";import"./BasePdfViewer.module.css-mql-g3iK.js";import"./PdfViewerAnnotationLayer-D__jD5j8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BQ-iSBvs.js";import"./PdfViewerOutlineSidebar-W-go355n.js";import"./PdfViewerSidebarHeader-DkjxfKLO.js";import"./useBaseUiId-CuSCou4B.js";import"./useControlled-8YOYv55u.js";import"./CompositeRoot-LN4w2psQ.js";import"./CompositeItem-BeYsw0Rf.js";import"./ToolbarRootContext-C0mmD1Sp.js";import"./composite-BKkRB1Ja.js";import"./svgIconContainer-DgH7XjE0.js";import"./PdfViewerSearchBar-GN_N8JEp.js";import"./chevron-up-DlUXpsgU.js";import"./chevron-down-BfaqTxAc.js";import"./cross-9AkiFjIe.js";import"./PdfViewerSidebar-D11R34h_.js";import"./index-WJ-o1DZ0.js";import"./index-CZ-MIMEA.js";import"./index-CLiETF6g.js";import"./PdfViewerToolbar-DXNFT0QT.js";import"./Button-6Q_hxnNq.js";import"./chevron-right-3ssPtUtU.js";import"./Input-BxTgEocG.js";import"./search-BtGEDCk0.js";import"./spin-CSiDR3EK.js";import"./error-CtWAgql8.js";import"./withOsdkMetrics-C1kb3R25.js";import"./makeExternalStore-B18oZ143.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
