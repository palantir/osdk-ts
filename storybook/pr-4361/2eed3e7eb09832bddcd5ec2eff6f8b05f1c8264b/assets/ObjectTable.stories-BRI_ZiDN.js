import{j as i}from"./iframe-gdP396qb.js";import{O as p}from"./object-table-BxXIpblp.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BI41KdxZ.js";import"./preload-helper-C9uq-iVz.js";import"./Table-gA3Wz3zS.js";import"./index-ClCZ0Ati.js";import"./Dialog-BQKYYTBz.js";import"./cross-DtCUEBMv.js";import"./svgIconContainer-afKcLYb0.js";import"./useBaseUiId-C_ToupKC.js";import"./InternalBackdrop-Dq6m4vJr.js";import"./composite-BvrmChzz.js";import"./index-BNFLba0z.js";import"./index-mgQPQKNR.js";import"./index-BZUsCMPC.js";import"./useEventCallback-DCdboZtN.js";import"./SkeletonBar-Blsmqup6.js";import"./LoadingCell-CMIsHrqu.js";import"./ColumnConfigDialog-B4dsqwP-.js";import"./DraggableList-DUngJXQK.js";import"./search-CRn0JbZd.js";import"./Input-DWlBDhXd.js";import"./useControlled-D2ey04Mp.js";import"./Button-CTlmrId0.js";import"./small-cross-X3ECwxK6.js";import"./ActionButton-Ckf3gmBM.js";import"./Checkbox-D_JVC0Qk.js";import"./useValueChanged-DSiA270H.js";import"./CollapsiblePanel-DHW97HGw.js";import"./MultiColumnSortDialog-BqMGh898.js";import"./MenuTrigger-DXz0NnsQ.js";import"./CompositeItem-CmcqEdwc.js";import"./ToolbarRootContext-txczp7dw.js";import"./getDisabledMountTransitionStyles-tj4MPdJt.js";import"./getPseudoElementBounds-skNxDQry.js";import"./chevron-down-D4IdPQsy.js";import"./index-DchLPEO5.js";import"./error-CUjlToFo.js";import"./BaseCbacBanner-BDs_xxej.js";import"./makeExternalStore-Cq8wmohV.js";import"./Tooltip-DxHEdFsh.js";import"./isObject-CpaAk3bR.js";import"./debounce-dYJtqIeY.js";import"./useOsdkClient-B58tmibE.js";import"./tick-Cx1Dvj4u.js";import"./DropdownField-B2Q-_o7O.js";import"./isEqual-BfFU6RDj.js";import"./_baseIsEqual-C2jmvlYE.js";import"./withOsdkMetrics-CDl4GesU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
