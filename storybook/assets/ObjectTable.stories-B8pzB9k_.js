import{j as i}from"./iframe-Bhux-jL2.js";import{O as p}from"./object-table-CA16_MIj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9j6v578.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D5A3MZPg.js";import"./index-CqpPyV6t.js";import"./Dialog-BYvkDmOC.js";import"./cross-CUQYhxA4.js";import"./svgIconContainer-DLxw3PxE.js";import"./useBaseUiId-De8pklpX.js";import"./InternalBackdrop-1Uep-6OD.js";import"./composite-pG-5UHC0.js";import"./index-Dq01vjvQ.js";import"./index-DbS2jUPU.js";import"./index-DkYiUypd.js";import"./useEventCallback-Cjzrema4.js";import"./SkeletonBar-D1FlFldy.js";import"./LoadingCell-DRoK-x5w.js";import"./ColumnConfigDialog-DKYIaNjP.js";import"./DraggableList-CoaIImom.js";import"./search-jbt_qsn3.js";import"./Input-Cz3DPiZR.js";import"./useControlled-B8x__iZM.js";import"./Button-CMvjR2Al.js";import"./small-cross-Dc7PW3MT.js";import"./ActionButton-D5iMXjgf.js";import"./Checkbox-D4zGkPrI.js";import"./useValueChanged-CSfjLy1S.js";import"./CollapsiblePanel-DGcKBfeQ.js";import"./MultiColumnSortDialog-eH_q_TBq.js";import"./MenuTrigger-BBZstzo2.js";import"./CompositeItem-x-GueMXE.js";import"./ToolbarRootContext-BAnbUtNA.js";import"./getDisabledMountTransitionStyles-DSrXhE1l.js";import"./getPseudoElementBounds-B5CqKbrh.js";import"./chevron-down-_Dmt60i4.js";import"./index-fIrfSYEO.js";import"./error-mg2-r6Xs.js";import"./BaseCbacBanner-uoC7ilO6.js";import"./makeExternalStore-fmuI2lu4.js";import"./Tooltip-CmR5c3KM.js";import"./PopoverPopup-C9A-63Ov.js";import"./debounce-C9UrikDA.js";import"./useOsdkClient-B-RCP7CA.js";import"./tick-BGANEUAQ.js";import"./DropdownField-D_Ub0nmh.js";import"./isEqual-FW8TNQ2z.js";import"./withOsdkMetrics-D-lmPy0A.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
