import{j as i}from"./iframe-OjM1fGhD.js";import{O as p}from"./object-table-Bs7knEq4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DaVvcuaz.js";import"./preload-helper-D7fi2uvl.js";import"./Table-DYtdHlhP.js";import"./index-CI4sblvN.js";import"./Dialog-COA8Sz2J.js";import"./cross-D69HQ2f-.js";import"./svgIconContainer-oX_Dupxj.js";import"./useBaseUiId-CUWfCekV.js";import"./InternalBackdrop-CvX7eefS.js";import"./composite-B2Qeod66.js";import"./index-DdpkN4AB.js";import"./index-DYYqOieW.js";import"./index-DZJYZ9CR.js";import"./useEventCallback-DPU1VIdY.js";import"./SkeletonBar-WHULGdS8.js";import"./LoadingCell-BnWSqwyd.js";import"./ColumnConfigDialog-piIcfzz1.js";import"./DraggableList-Dzx2s52t.js";import"./search-BhAcVZf9.js";import"./Input-DeCvr9l5.js";import"./useControlled-DrzgK2A0.js";import"./Button-BtiOWDEe.js";import"./small-cross-tNWYly7S.js";import"./ActionButton-Dab2pn_s.js";import"./Checkbox-DgQ6fnDP.js";import"./useValueChanged-BQlQj-qd.js";import"./CollapsiblePanel-CG8OLXdZ.js";import"./MultiColumnSortDialog-BIl-J-Sl.js";import"./MenuTrigger-C3KKugb7.js";import"./CompositeItem-Ddy0SGDP.js";import"./ToolbarRootContext-zAO6OvY5.js";import"./getDisabledMountTransitionStyles-CmzrHyFb.js";import"./getPseudoElementBounds-CRHH2PCz.js";import"./chevron-down-7rWKu4_j.js";import"./index-Cd3zzhVm.js";import"./error-q3Etsg6o.js";import"./BaseCbacBanner-BbaHTMrp.js";import"./makeExternalStore-C6aI4llN.js";import"./Tooltip-nVrA_o7L.js";import"./PopoverPopup-WCSstPUg.js";import"./debounce-3PyN9UKe.js";import"./useOsdkClient-CG8rDO26.js";import"./tick-CLWn7BNG.js";import"./DropdownField-DQutHIXJ.js";import"./isEqual-XsRMCz9p.js";import"./withOsdkMetrics-DE164d5t.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
