import{j as i}from"./iframe-BfbeS0O1.js";import{O as p}from"./object-table-DMoZrkMs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B3D0BL56.js";import"./preload-helper-BioSAIdn.js";import"./Table-4rJLhQOU.js";import"./index-DQRN7I9U.js";import"./Dialog-C_ulBudk.js";import"./cross-BrOuNhEK.js";import"./svgIconContainer-BWTo31o2.js";import"./useBaseUiId-CbE1yfdx.js";import"./InternalBackdrop-BErPu4sg.js";import"./composite-DdfbaPUy.js";import"./index-CXELN0N0.js";import"./index-Cj2nVCmE.js";import"./index-Dt5mzju3.js";import"./useEventCallback-CG5RiOcA.js";import"./SkeletonBar-DFnnrDMP.js";import"./LoadingCell-DxtP6Jr4.js";import"./ColumnConfigDialog-Omz9kY1N.js";import"./DraggableList-CnCXkZN1.js";import"./search-DrG1G0EY.js";import"./Input-Db7Q4YLm.js";import"./useControlled-C81GKmVH.js";import"./Button-UB2OACG0.js";import"./small-cross-C-vkxJdm.js";import"./ActionButton-I0vxcYpF.js";import"./Checkbox-EkG_t7q5.js";import"./useValueChanged-cA2be_Wp.js";import"./CollapsiblePanel-C_wVD-VC.js";import"./MultiColumnSortDialog-IBffDIpE.js";import"./MenuTrigger-BaL9sdl0.js";import"./CompositeItem-B4opeUeS.js";import"./ToolbarRootContext-DbCqNaiP.js";import"./getDisabledMountTransitionStyles-B6fdwBct.js";import"./getPseudoElementBounds-lVmoOwlf.js";import"./chevron-down-CR0bt--Q.js";import"./index-BgHNYcJW.js";import"./error-unCo8sRO.js";import"./BaseCbacBanner-CbOaezlM.js";import"./makeExternalStore-DN287DfU.js";import"./Tooltip-C2QbMAIO.js";import"./PopoverPopup-CGYU6k7m.js";import"./debounce-Dv7ZBlf-.js";import"./useOsdkClient-B8cCXMXJ.js";import"./tick-bWfj6Xg6.js";import"./DropdownField-BGKSMB7L.js";import"./isEqual-Cv25-UiM.js";import"./withOsdkMetrics-D7z9HYOb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
