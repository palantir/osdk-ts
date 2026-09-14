import{j as i}from"./iframe-DLHR6L4Z.js";import{O as p}from"./object-table-DrbkPQ4n.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BoKmJnCt.js";import"./preload-helper-Dx-zoqBZ.js";import"./Table-CFQwFyGq.js";import"./index-Ci6l6bLg.js";import"./Dialog-CMihgMQO.js";import"./cross-Dr9ey-no.js";import"./svgIconContainer-OFY1tmQv.js";import"./useBaseUiId-1yQPi4Ok.js";import"./InternalBackdrop-B_WdIFN7.js";import"./composite-DufSPfDq.js";import"./index-Cty81kva.js";import"./index-qvggJvKY.js";import"./index-BCQmOQno.js";import"./useEventCallback-WBP10YPW.js";import"./SkeletonBar-f-fkDeaw.js";import"./LoadingCell-DqrkyBlj.js";import"./ColumnConfigDialog-CZFlYxhK.js";import"./DraggableList-DJ0O4QG2.js";import"./search-BKzV_clV.js";import"./Input-DPBWJEz5.js";import"./useControlled-CyfyjGCX.js";import"./Button-Bfsbp0Vn.js";import"./small-cross-Coj1hZH_.js";import"./ActionButton-JQl4ud6K.js";import"./Checkbox-BKXlVChy.js";import"./useValueChanged-BoDeFmnt.js";import"./CollapsiblePanel-VYcA49X-.js";import"./MultiColumnSortDialog-BUws_Xs7.js";import"./MenuTrigger-DXpBlSqF.js";import"./CompositeItem-Uc_jxWPR.js";import"./ToolbarRootContext-huk_G4xt.js";import"./getDisabledMountTransitionStyles-C88-mCuq.js";import"./getPseudoElementBounds-C4j2UgFA.js";import"./chevron-down-CLyH651g.js";import"./index-DPyGU-iS.js";import"./error-CPzqX2rB.js";import"./BaseCbacBanner-BMeh3izb.js";import"./makeExternalStore-CGlrcfR1.js";import"./Tooltip-BYsQTzV_.js";import"./PopoverPopup-CUUPXvJN.js";import"./debounce-Cco9EZf3.js";import"./useOsdkClient-Ds4SzcYA.js";import"./tick-Dtw1ESRh.js";import"./DropdownField-D6WaBAb7.js";import"./isEqual-D_1wsBc-.js";import"./withOsdkMetrics-s0w2F5xR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
