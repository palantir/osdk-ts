import{j as i}from"./iframe-DFpZdgNU.js";import{O as p}from"./object-table-BzZFLfSB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BBywCvdq.js";import"./preload-helper-BiKApNs9.js";import"./Table-CC9Camr0.js";import"./index-DlVDHp89.js";import"./Dialog-CJ3HaTy4.js";import"./cross-BHvoIDr_.js";import"./svgIconContainer-Bn3Ri9oc.js";import"./useBaseUiId-0zduKOPk.js";import"./InternalBackdrop-DRGhJgBK.js";import"./composite-CM1n6GcK.js";import"./index-DMpyqEyR.js";import"./index-CZjMLcuo.js";import"./index-Cq3lo4z7.js";import"./useEventCallback-YkuA_1L6.js";import"./SkeletonBar-eYoNq5WF.js";import"./LoadingCell-BnTfQ31G.js";import"./ColumnConfigDialog-pw8oR0pV.js";import"./DraggableList-x5sgzpnu.js";import"./search-B6WVYs54.js";import"./Input-BpHQpMpf.js";import"./useControlled-hOadE75D.js";import"./Button-BHbgtEyL.js";import"./small-cross-D42tWcxj.js";import"./ActionButton-CDJ_DkbP.js";import"./Checkbox-BdJ__OMn.js";import"./useValueChanged-BqSpbqAV.js";import"./CollapsiblePanel-BtVU-N7R.js";import"./MultiColumnSortDialog-uOASletb.js";import"./MenuTrigger-hRi5Jjk9.js";import"./CompositeItem-CHtvYS6F.js";import"./ToolbarRootContext-BYbbUH6Y.js";import"./getDisabledMountTransitionStyles-wG4lhnAQ.js";import"./getPseudoElementBounds-DyopGY8r.js";import"./chevron-down-DGAHgV3w.js";import"./index-CP7LKd11.js";import"./error-DAvK-lhg.js";import"./BaseCbacBanner-Qoz9aZU3.js";import"./makeExternalStore-CAJutcEV.js";import"./Tooltip-DXygPOKv.js";import"./PopoverPopup-D8Q_qkL_.js";import"./debounce-BCq9jsqw.js";import"./useOsdkClient-BVnzibDe.js";import"./tick-C1HKmB3O.js";import"./DropdownField-BWCkuBcO.js";import"./isEqual-Bcz7pOKA.js";import"./withOsdkMetrics-vWdfyIwO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
