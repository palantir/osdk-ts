import{j as i}from"./iframe-DPKjJbUl.js";import{O as p}from"./object-table-CiA2mgLE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-md54GR0_.js";import"./preload-helper-jysXR-to.js";import"./Table-CkCIOkQc.js";import"./index-2SPkUawk.js";import"./Dialog-Bxoi34Wm.js";import"./cross-Bur9aTxF.js";import"./svgIconContainer-DcOBBk2S.js";import"./useBaseUiId-CpCoqI7r.js";import"./InternalBackdrop-CNupZRS_.js";import"./composite-4w9rumvd.js";import"./index-BJOf7s-T.js";import"./index-BHZ9rsvc.js";import"./index-BLTHUTFO.js";import"./useEventCallback-CfXNQR5R.js";import"./SkeletonBar-_y5I33tw.js";import"./LoadingCell-DcLgQ4Ug.js";import"./ColumnConfigDialog-BnUf7DkN.js";import"./DraggableList-UzQEUU7r.js";import"./search-CfvDmUdq.js";import"./Input-Cp0wF4SO.js";import"./useControlled-36BIvyhs.js";import"./Button-DhDj0z4t.js";import"./small-cross-jfjdmJHA.js";import"./ActionButton-CR2Evx-a.js";import"./Checkbox-C4uEDJZr.js";import"./useValueChanged-BPifwweb.js";import"./CollapsiblePanel-C7tnC6NS.js";import"./MultiColumnSortDialog-DGfaXG6u.js";import"./MenuTrigger-C-T3X_LR.js";import"./CompositeItem-C1vm5CBx.js";import"./ToolbarRootContext-BNVI8n48.js";import"./getDisabledMountTransitionStyles-BpxmMrDd.js";import"./getPseudoElementBounds-CH0myo6i.js";import"./chevron-down-CkO13R5T.js";import"./index-CazPboEE.js";import"./error-Cbkkosws.js";import"./BaseCbacBanner-D8PUVhgH.js";import"./makeExternalStore-BrJQqJjN.js";import"./Tooltip-Ct0waVPJ.js";import"./PopoverPopup-CqPpOpqV.js";import"./debounce-DSQ3zwts.js";import"./useOsdkClient-X3frRnwW.js";import"./tick-BKzW071D.js";import"./DropdownField-BWhPjm6f.js";import"./isEqual-BcnxjguD.js";import"./withOsdkMetrics-V_4YWEt4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
