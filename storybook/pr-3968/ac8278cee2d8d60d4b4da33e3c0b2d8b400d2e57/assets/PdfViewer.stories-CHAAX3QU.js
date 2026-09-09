import{j as r,M as s}from"./iframe-Ca8QPFs7.js";import{P as p}from"./pdf-viewer-COGk09wl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BUKpUslC.js";import"./preload-helper-COsmiGlU.js";import"./PdfViewer-B-L-VWwz.js";import"./index-TIjGnA-V.js";import"./BasePdfViewer-DeC5aSE8.js";import"./BasePdfViewer.module.css-DDYrZ_0u.js";import"./PdfViewerAnnotationLayer-BuEXaNsu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--FmbMuZb.js";import"./PdfViewerOutlineSidebar-jFUpR7ic.js";import"./PdfViewerSidebarHeader-Dly6-tDL.js";import"./useBaseUiId-EAvVFtG3.js";import"./useControlled-D9cxw3en.js";import"./CompositeRoot-DKxqjok-.js";import"./CompositeItem-Blj-310R.js";import"./ToolbarRootContext-vcNNCMZy.js";import"./composite-TrXp-_T_.js";import"./svgIconContainer-CTykICQ9.js";import"./PdfViewerSearchBar-B6cCd-IG.js";import"./chevron-up-BWF9M2on.js";import"./chevron-down-CLaQgAU8.js";import"./cross-fEUgPw6t.js";import"./PdfViewerSidebar-LBE-uRg2.js";import"./index-Bc2S_tLj.js";import"./index-B7VCz-93.js";import"./index-4Pm78iQf.js";import"./PdfViewerToolbar-Ck7SOeaX.js";import"./Button-CDLpEtAu.js";import"./chevron-right-DXtMNq9S.js";import"./Input-bPmf1b1D.js";import"./search-mtN4hQ3z.js";import"./spin-D3Cu7EeK.js";import"./error-iIOc5tuM.js";import"./withOsdkMetrics-DWYY-gQH.js";import"./makeExternalStore-DFNzrn-Z.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
