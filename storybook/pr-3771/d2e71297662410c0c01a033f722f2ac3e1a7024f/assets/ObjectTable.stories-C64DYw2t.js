import{j as i}from"./iframe-B7YfKj_r.js";import{O as p}from"./object-table-MNwgz7c9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BT6ggjRm.js";import"./preload-helper-zLh7gNhX.js";import"./Table-CVOmZ436.js";import"./index-CbJ6-D60.js";import"./Dialog-BXtqyTtu.js";import"./cross-0p6Vac4C.js";import"./svgIconContainer-Cz-PKCx4.js";import"./useBaseUiId-BdhKr30W.js";import"./InternalBackdrop-wAKazhys.js";import"./composite-DPXSfqsf.js";import"./index-BnfXHeb4.js";import"./index-s7UAVR_E.js";import"./index-CP1mkO19.js";import"./useEventCallback-x5Alg8Rl.js";import"./SkeletonBar-CoteejN9.js";import"./LoadingCell-KZnN3LUF.js";import"./ColumnConfigDialog-BiK-7kVu.js";import"./DraggableList-F7dQobt1.js";import"./search-Gvi_C_xs.js";import"./Input-CH_xkTTH.js";import"./useControlled-n47txmPS.js";import"./isEqual-B3yB_zqx.js";import"./isObject-HAXozI9M.js";import"./Button-OvcAa909.js";import"./ActionButton-DTC4pJjC.js";import"./Checkbox-BcQmQvKM.js";import"./useValueChanged-dNqqBU5J.js";import"./CollapsiblePanel-BxW4Hb4X.js";import"./MultiColumnSortDialog-CmowWdqV.js";import"./MenuTrigger-C9VeEY2O.js";import"./CompositeItem-DCU6fW8B.js";import"./ToolbarRootContext-BNxVHquj.js";import"./getDisabledMountTransitionStyles-ceQ6Bpps.js";import"./getPseudoElementBounds-BCdtuT11.js";import"./chevron-down-CEfOWXYF.js";import"./index-DO5HNGTZ.js";import"./error-CsyKVqOH.js";import"./BaseCbacBanner-BpD5Op_I.js";import"./makeExternalStore-qy5hPVIr.js";import"./Tooltip-D1b-uI4u.js";import"./PopoverPopup-Dbeile-5.js";import"./toNumber-lfnzEnWR.js";import"./useOsdkClient-DPaJk8c1.js";import"./tick-CAGbRlL2.js";import"./DropdownField-CUs6cqrJ.js";import"./withOsdkMetrics-C_jrvusq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
