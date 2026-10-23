import{j as i}from"./iframe-Bfa633nI.js";import{O as p}from"./object-table-CSJb6QQI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BopUDl54.js";import"./preload-helper-S8ArRewN.js";import"./Table-R1_6S3Bc.js";import"./index-CAFX3a2o.js";import"./Dialog-B11A-NQW.js";import"./cross-CO8lPM-Y.js";import"./svgIconContainer-CMg2uk3-.js";import"./useBaseUiId-DkL2EsGI.js";import"./InternalBackdrop-BkK8ufDF.js";import"./composite-MyhD4oE7.js";import"./index-CyqiMZNC.js";import"./index-g_La0Psk.js";import"./index-D18CgaCd.js";import"./useEventCallback-DqyAn3HD.js";import"./SkeletonBar-Q9lR3jGv.js";import"./LoadingCell-CukCo_Qp.js";import"./ColumnConfigDialog-D1KFMTQ9.js";import"./DraggableList--tFdoGM9.js";import"./search-DBXxF15B.js";import"./Input-vSvt0OGa.js";import"./useControlled-DE-SX_fd.js";import"./Button-bQTkGamX.js";import"./small-cross-dpPEHUzg.js";import"./ActionButton-DjVRKWVw.js";import"./Checkbox-D8QHegc2.js";import"./useValueChanged-BMAglr7j.js";import"./CollapsiblePanel-CgpMYvLN.js";import"./MultiColumnSortDialog-Cq87ZCTh.js";import"./MenuTrigger-bATh7p8G.js";import"./CompositeItem-BHvcBU4g.js";import"./ToolbarRootContext-rfZwmAj4.js";import"./getDisabledMountTransitionStyles-CdY-VY1I.js";import"./getPseudoElementBounds-DASAzYI8.js";import"./chevron-down-sNl64qaM.js";import"./index-BnocMrsR.js";import"./error-jmH2Pe7J.js";import"./BaseCbacBanner-WLoGuysJ.js";import"./makeExternalStore-D8-WR8za.js";import"./Tooltip-CGVIqFa_.js";import"./PopoverPopup-Bli7SJMu.js";import"./debounce-UGU4ubXF.js";import"./useOsdkClient-yvB3K87Q.js";import"./tick-BpRcty2P.js";import"./DropdownField-DBLuDlNB.js";import"./isEqual-DrwA24xd.js";import"./withOsdkMetrics-BKztbHSk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
