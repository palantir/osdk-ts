import{j as i}from"./iframe-Ci-tzRKJ.js";import{O as p}from"./object-table-CITG45g_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-PI--M885.js";import"./preload-helper-DJal9EPS.js";import"./Table-CmQN9Y76.js";import"./index-CKLM9KrJ.js";import"./Dialog-KZkL2rM7.js";import"./cross--vCoyTfT.js";import"./svgIconContainer-DvpSMQMB.js";import"./useBaseUiId-Bzqf9i17.js";import"./InternalBackdrop-C-ihlysw.js";import"./composite-C4r_G6LN.js";import"./index-DeFOLRTd.js";import"./index-CaIqfwj2.js";import"./index-BlJyzssb.js";import"./useEventCallback-Bny-aaz_.js";import"./SkeletonBar-Bh_W7132.js";import"./LoadingCell-D6DwyYVw.js";import"./ColumnConfigDialog-B8vm10hl.js";import"./DraggableList-DIocPcNc.js";import"./search-UQXWsdYO.js";import"./Input-BtwCPw-3.js";import"./useControlled-Cao399YH.js";import"./isEqual-BCUYvjjC.js";import"./isObject-6IzxmPNy.js";import"./Button-589e5R23.js";import"./ActionButton-hVwQz-i4.js";import"./Checkbox-ClY58DUW.js";import"./useValueChanged-5vetb3Im.js";import"./CollapsiblePanel-C9SI1XAD.js";import"./MultiColumnSortDialog-B9hp6Ldk.js";import"./MenuTrigger-BDYJ_hBI.js";import"./CompositeItem-CTqslAWX.js";import"./ToolbarRootContext-BbdAu-5X.js";import"./getDisabledMountTransitionStyles-Dhb3HthS.js";import"./getPseudoElementBounds-DMBkpSSS.js";import"./chevron-down-BTzWyvSz.js";import"./index-D-ov5pJU.js";import"./error-lEY9aX5-.js";import"./BaseCbacBanner-DnCgjrWi.js";import"./makeExternalStore-C9b1LS5H.js";import"./Tooltip-DFR6z9eh.js";import"./PopoverPopup-BLnVT5Jl.js";import"./toNumber-BOpuPoJi.js";import"./useOsdkClient-3HA0Y5pZ.js";import"./tick-CChZAUzt.js";import"./DropdownField-Bj5kZNiR.js";import"./withOsdkMetrics-fuyb5ykd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
