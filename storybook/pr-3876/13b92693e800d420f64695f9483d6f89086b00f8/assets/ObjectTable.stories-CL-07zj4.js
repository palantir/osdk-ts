import{j as i}from"./iframe-0eC9Hb1Q.js";import{O as p}from"./object-table-D7oZIRCE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-reAznzgd.js";import"./preload-helper-CyETt7By.js";import"./Table-D5uZHd5s.js";import"./index-CRE2XHsU.js";import"./Dialog-B8_GHTyL.js";import"./cross-D9zq7TFg.js";import"./svgIconContainer-C7W98r5m.js";import"./useBaseUiId-B_2ELJP8.js";import"./InternalBackdrop-BOAibfmR.js";import"./composite-Cd_XCN96.js";import"./index-CvdbH2x8.js";import"./index-D9GA0kdv.js";import"./index-iV2dELQ1.js";import"./useEventCallback-C0tClelP.js";import"./SkeletonBar-eBdcJl3t.js";import"./LoadingCell-CZ-mwP2y.js";import"./ColumnConfigDialog-ro3mDikH.js";import"./DraggableList-DlG1vA6n.js";import"./search-F24JokU_.js";import"./Input-CIgrvflx.js";import"./useControlled-D5GxZ6C-.js";import"./Button-C1ygc_il.js";import"./small-cross-DFLTLzz0.js";import"./ActionButton-B6EzioXF.js";import"./Checkbox-JWIuZaTI.js";import"./useValueChanged-C5Z4l0Hz.js";import"./CollapsiblePanel-Cq_F2eVy.js";import"./MultiColumnSortDialog-EPeOeL4H.js";import"./MenuTrigger-BagA7P2M.js";import"./CompositeItem-CV7hu4fC.js";import"./ToolbarRootContext-afkGU23n.js";import"./getDisabledMountTransitionStyles-CjHO1xCK.js";import"./getPseudoElementBounds-BhgXRSlJ.js";import"./chevron-down-BTFePERp.js";import"./index-BiegP6go.js";import"./error-lpXmTpCf.js";import"./BaseCbacBanner-Do2SxMD9.js";import"./makeExternalStore-CP3jPB6B.js";import"./Tooltip-Du2WyMOU.js";import"./PopoverPopup-Cbgij3G0.js";import"./debounce-DT3Sn9e2.js";import"./useOsdkClient-B7nV8p0s.js";import"./tick-DklGyNLw.js";import"./DropdownField-Ba8uSvbB.js";import"./isEqual-DGiSGIUH.js";import"./withOsdkMetrics-COXmoufD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
