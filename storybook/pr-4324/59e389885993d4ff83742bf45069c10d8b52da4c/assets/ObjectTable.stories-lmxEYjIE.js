import{j as i}from"./iframe-Beajvbu-.js";import{O as p}from"./object-table-CuoJIEfJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CuKR3B2m.js";import"./preload-helper-dZkoR4F_.js";import"./Table-CtvDlE9v.js";import"./index-AV0Zt5q4.js";import"./Dialog-DMm-bMz7.js";import"./cross-KOMA-dmo.js";import"./svgIconContainer-BOWvIcxU.js";import"./useBaseUiId-D9Gk7Ps8.js";import"./InternalBackdrop-CaxlX099.js";import"./composite-B77JxL2r.js";import"./index-DJbbiMo-.js";import"./index-DHfuPCUx.js";import"./index-CigOb2f9.js";import"./useEventCallback-BvQAVvQb.js";import"./SkeletonBar-DjvCRCop.js";import"./LoadingCell-DbRYftPe.js";import"./ColumnConfigDialog-5LIRF41O.js";import"./DraggableList-CZImoszn.js";import"./search-WL4FSHko.js";import"./Input-CusKMl7d.js";import"./useControlled-BgXewBwk.js";import"./Button-D4EG1oUS.js";import"./small-cross-CBKgWU-e.js";import"./ActionButton-RaZCtRc3.js";import"./Checkbox-CdIuKuvS.js";import"./useValueChanged-C6EHjupA.js";import"./CollapsiblePanel-DRA-iOzD.js";import"./MultiColumnSortDialog-Ck0ZUaLR.js";import"./MenuTrigger-BAbau4x_.js";import"./CompositeItem-Dxfd76IV.js";import"./ToolbarRootContext-DQCYszJ6.js";import"./getDisabledMountTransitionStyles-2F0S6DHA.js";import"./getPseudoElementBounds-BvsNaSZR.js";import"./chevron-down-BTZVhACL.js";import"./index-BEqze36e.js";import"./error-DahJGZf3.js";import"./BaseCbacBanner-CQ2IL9VX.js";import"./makeExternalStore-t469AycL.js";import"./Tooltip-C0_dK_lR.js";import"./PopoverPopup-CLmwgmKW.js";import"./debounce-DMOv5NrL.js";import"./useOsdkClient-DkQyt0z3.js";import"./tick-ByR4FmU5.js";import"./DropdownField-B3UK3okG.js";import"./isEqual-CPDtqAuK.js";import"./withOsdkMetrics-QZ1lgR_i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
