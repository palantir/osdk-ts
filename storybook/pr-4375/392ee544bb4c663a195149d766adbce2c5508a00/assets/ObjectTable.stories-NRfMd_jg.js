import{j as i}from"./iframe-HL5MQevY.js";import{O as p}from"./object-table-Br4gN5qL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ljMo7YM4.js";import"./preload-helper-_Ar_KgCE.js";import"./Table-Dr5Fkr5G.js";import"./index-CgN-SBJb.js";import"./Dialog-BK9qLDgm.js";import"./cross-peQbcr5N.js";import"./svgIconContainer-BLMvF_H6.js";import"./useBaseUiId-DySigJtL.js";import"./InternalBackdrop-CKzg6RWA.js";import"./composite-DWznhUuB.js";import"./index-CrQU1n-1.js";import"./index-f_DjFpxo.js";import"./index-C5eyjoS4.js";import"./useEventCallback-DlHXQ56Q.js";import"./SkeletonBar-B-apZFZ9.js";import"./LoadingCell-DSvyww-o.js";import"./ColumnConfigDialog-4ALjdxqV.js";import"./DraggableList-CIVKfffU.js";import"./search-BmC04ZEV.js";import"./Input-DgL7dTdA.js";import"./useControlled-BtrL0bqk.js";import"./Button-CqmZF1Qg.js";import"./small-cross-CMw0W6zl.js";import"./ActionButton-BLpeWzFG.js";import"./Checkbox-Hr-W96Z2.js";import"./useValueChanged-B9yWsaBI.js";import"./CollapsiblePanel-VgvJldOc.js";import"./MultiColumnSortDialog-Bw9P7eMf.js";import"./MenuTrigger-CA8etj0e.js";import"./CompositeItem-BWnHlDKK.js";import"./ToolbarRootContext-Egv6Ob_q.js";import"./getDisabledMountTransitionStyles-BxwARY5V.js";import"./getPseudoElementBounds-CHzRmgRw.js";import"./chevron-down-BP0kQuP_.js";import"./index-D0tF1Jnd.js";import"./error-CIfjiXVi.js";import"./BaseCbacBanner-DW6vW6kE.js";import"./makeExternalStore-CTUMxwBz.js";import"./Tooltip-fPY7edYe.js";import"./isObject-BqGyebfI.js";import"./debounce-CBt-yOgZ.js";import"./useOsdkClient-BNLgdfP5.js";import"./tick-BndTvqfU.js";import"./DropdownField-8OaEx8Wn.js";import"./isEqual-BBF27A1Q.js";import"./_baseIsEqual-DmjT90h1.js";import"./withOsdkMetrics-B6341jPo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
