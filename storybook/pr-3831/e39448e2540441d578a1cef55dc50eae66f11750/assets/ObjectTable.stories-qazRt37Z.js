import{j as i}from"./iframe-BAzoJD_n.js";import{O as p}from"./object-table-CXjRtA9s.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bsv3MAJ7.js";import"./preload-helper-DSHDaNkC.js";import"./Table-D_rBRk7V.js";import"./index-s4lAOVrs.js";import"./Dialog-CR639lRj.js";import"./cross-Cz9X-8vp.js";import"./svgIconContainer-DcEtiJnJ.js";import"./useBaseUiId-X8JbO_jF.js";import"./InternalBackdrop-BEz-Het1.js";import"./composite-C2ZeH-nt.js";import"./index-DnptcgYz.js";import"./index-BMCs90I6.js";import"./index-D9L2mjOB.js";import"./useEventCallback-ClbdUzWy.js";import"./SkeletonBar-JSA8ez91.js";import"./LoadingCell-4aetjgV8.js";import"./ColumnConfigDialog-BY9NBeIW.js";import"./DraggableList-CluNiQuA.js";import"./search-BX5F8_z_.js";import"./Input-DvNrW-kH.js";import"./useControlled-cRyxw0TO.js";import"./isEqual-DiTVCVI3.js";import"./isObject-BRC3jVhz.js";import"./Button-C6-5CX8D.js";import"./ActionButton-xm3OfMXt.js";import"./Checkbox-D82zXn1s.js";import"./useValueChanged-B_BD_Ppi.js";import"./CollapsiblePanel-BOrVcuXG.js";import"./MultiColumnSortDialog-B8YCTi_s.js";import"./MenuTrigger-C2dbIgFm.js";import"./CompositeItem-Dx_RF7XZ.js";import"./ToolbarRootContext-DHhHK4Vd.js";import"./getDisabledMountTransitionStyles-alpHjjXx.js";import"./getPseudoElementBounds-0QkKzEQT.js";import"./chevron-down-BgJhhOtE.js";import"./index-RB9l46zQ.js";import"./error-3n0FpK4k.js";import"./BaseCbacBanner-C9TiEwDc.js";import"./makeExternalStore-C_ctE6bz.js";import"./Tooltip-D3twPyS2.js";import"./PopoverPopup-dsU5wvNs.js";import"./toNumber-Bt6DwShw.js";import"./useOsdkClient-Bfmyk2Eg.js";import"./tick-C3Hz3Jzx.js";import"./DropdownField-DTwMjcEt.js";import"./withOsdkMetrics-CiR7QeDt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
