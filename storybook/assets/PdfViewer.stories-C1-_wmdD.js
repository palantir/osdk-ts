import{j as r,M as s}from"./iframe-YacpH74x.js";import{P as p}from"./pdf-viewer-DHNP4ExY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CUOc-y5j.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DHxnbk1W.js";import"./index-BEoxUJoA.js";import"./BasePdfViewer-CpAe47pR.js";import"./BasePdfViewer.module.css-Zr-Cc4Qt.js";import"./PdfViewerAnnotationLayer-BQXsAcXw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dlh4-K9L.js";import"./PdfViewerOutlineSidebar-DJRECBGC.js";import"./PdfViewerSidebarHeader-C1qA8pzT.js";import"./useBaseUiId-4SFOUSCG.js";import"./useControlled-CNlO3TEz.js";import"./CompositeRoot-BQqms1PS.js";import"./CompositeItem-T4MrQSqM.js";import"./ToolbarRootContext-BntDugl_.js";import"./composite-DelgFzsG.js";import"./svgIconContainer-BUTn-dCB.js";import"./PdfViewerSearchBar-CGgCAlZq.js";import"./chevron-up-ld7cRskL.js";import"./chevron-down-Ce1omtAP.js";import"./cross-CMJXQf2R.js";import"./PdfViewerSidebar-BYjH5aZj.js";import"./index-D-e4FuV7.js";import"./index-C1Y9ReN9.js";import"./index-LgDXHTpd.js";import"./PdfViewerToolbar-CVY3el44.js";import"./Button-CZyYceU0.js";import"./chevron-right-CBwo_jKo.js";import"./Input-CU1bZoi8.js";import"./search-BkFAurUd.js";import"./spin-RAxNKkGp.js";import"./error-D9NpDKzr.js";import"./withOsdkMetrics-nLoJ6ux7.js";import"./makeExternalStore-wqA1Cewh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
