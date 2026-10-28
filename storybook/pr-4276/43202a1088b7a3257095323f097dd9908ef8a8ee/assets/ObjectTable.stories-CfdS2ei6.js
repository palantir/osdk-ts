import{j as i}from"./iframe-BeH6Kgtk.js";import{O as p}from"./object-table-C7FluA5B.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cs5NJ3Il.js";import"./preload-helper-DIEhRyUP.js";import"./Table-D525YSUk.js";import"./index-DFSFBHkF.js";import"./Dialog-BCu81KDD.js";import"./cross-CX4SHNo3.js";import"./svgIconContainer-Bb-RAJkY.js";import"./useBaseUiId-CtZE3HDc.js";import"./InternalBackdrop-tGSxu3X-.js";import"./composite-oEq7yTUS.js";import"./index-Bi2hqiVi.js";import"./index-DgDaT3k8.js";import"./index-B83GxJH9.js";import"./useEventCallback-C6Ywg3fj.js";import"./SkeletonBar-Cef5YzUY.js";import"./LoadingCell-CQuJ0e2d.js";import"./ColumnConfigDialog-Dx1mF4-4.js";import"./DraggableList-vejvpVIl.js";import"./search-CAOX7A7K.js";import"./Input-RgiEvmaC.js";import"./useControlled-Bdo1gXa6.js";import"./Button-Cy9t27DN.js";import"./small-cross-BIL5QE4b.js";import"./ActionButton-Dn_I3vRk.js";import"./Checkbox-BnU9aEnD.js";import"./useValueChanged-GpyRtBxV.js";import"./CollapsiblePanel-DEBXY80q.js";import"./MultiColumnSortDialog-AOlm58uI.js";import"./MenuTrigger-pGKSNFFq.js";import"./CompositeItem-BFteZ_HC.js";import"./ToolbarRootContext-Dd5p2hpI.js";import"./getDisabledMountTransitionStyles-TI3kKTby.js";import"./getPseudoElementBounds-XJNejySA.js";import"./chevron-down-BQRyOpPG.js";import"./index-BxZQFTTq.js";import"./error-Dyg0hO9Y.js";import"./BaseCbacBanner-C7opKen9.js";import"./makeExternalStore-CtDF7lCi.js";import"./Tooltip-BqIx27JT.js";import"./isObject-raxYKDb4.js";import"./debounce-DQFTeh52.js";import"./useOsdkClient-8GVphyRP.js";import"./tick-CnxOlA-z.js";import"./DropdownField-BjkAOtL1.js";import"./isEqual-CkU-cJx5.js";import"./_baseIsEqual-BNTB2wLf.js";import"./withOsdkMetrics-Dy2obrep.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
