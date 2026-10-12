import{j as i}from"./iframe-Bnd7pp_H.js";import{O as p}from"./object-table-4cK8FCON.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BfOnW1Jm.js";import"./preload-helper-CQp4ttna.js";import"./Table-CT49F1bO.js";import"./index-Dq4Q7R9n.js";import"./Dialog-rVHDyjlb.js";import"./cross-nf57os0A.js";import"./svgIconContainer-BHFCuUIe.js";import"./useBaseUiId-C3FoEBlZ.js";import"./InternalBackdrop-DF5eA8FP.js";import"./composite-ChdURaw7.js";import"./index-CdD4spHg.js";import"./index-CFBknfgj.js";import"./index-_ppv4b-3.js";import"./useEventCallback-DrUAM8i2.js";import"./SkeletonBar-DNsqmLz9.js";import"./LoadingCell-Ba7x1O3X.js";import"./ColumnConfigDialog-BE67hQV-.js";import"./DraggableList-dtTt2aoG.js";import"./search-C2rfWWoo.js";import"./Input-Dh0I0gBB.js";import"./useControlled-BJ3TNVDx.js";import"./Button-wIX1QNwU.js";import"./small-cross-Fvp5VPfx.js";import"./ActionButton-Dfv8zCtw.js";import"./Checkbox-DnU42Rli.js";import"./useValueChanged-CBe6yFc7.js";import"./CollapsiblePanel-DplLNpgq.js";import"./MultiColumnSortDialog-Bi-DTI_a.js";import"./MenuTrigger-B6Hf9dfZ.js";import"./CompositeItem-B1cp5WfN.js";import"./ToolbarRootContext-V1EJjV6d.js";import"./getDisabledMountTransitionStyles-B1HGzF4D.js";import"./getPseudoElementBounds-DRM09z-T.js";import"./chevron-down-CkIljS9G.js";import"./index-L92dEHBQ.js";import"./error-vnD_TY7d.js";import"./BaseCbacBanner-BNaku5TU.js";import"./makeExternalStore-BZ_ZxDJW.js";import"./Tooltip-DxkXYJMW.js";import"./PopoverPopup-DVwvpeMg.js";import"./debounce-CLMmEpMo.js";import"./useOsdkClient-Bzkrieut.js";import"./tick-BMXdWkDm.js";import"./DropdownField-28PDU_yD.js";import"./isEqual-DlIlAhIm.js";import"./withOsdkMetrics-CtQ2hxG_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
