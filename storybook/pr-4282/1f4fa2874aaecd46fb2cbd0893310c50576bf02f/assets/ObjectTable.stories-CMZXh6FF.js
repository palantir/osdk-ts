import{j as i}from"./iframe-DuvqzVxr.js";import{O as p}from"./object-table-ACOy5fIY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DNXPsfvA.js";import"./preload-helper-B8Qd9CCZ.js";import"./Table-t_ayPNbZ.js";import"./index-CAuUDW48.js";import"./Dialog-YTWXeUoK.js";import"./cross-D-jw0QJK.js";import"./svgIconContainer-D3ZSKuHH.js";import"./useBaseUiId-CfATFv1v.js";import"./InternalBackdrop-CLiFzfHC.js";import"./composite-CdnuQNOj.js";import"./index-Bs6MnhUR.js";import"./index-BfNHcsKt.js";import"./index-CmRTjbwa.js";import"./useEventCallback-Db_vpyOg.js";import"./SkeletonBar-BLNTNrn1.js";import"./LoadingCell-CsMzBol1.js";import"./ColumnConfigDialog-DMAc6Z0z.js";import"./DraggableList-C54BtvoC.js";import"./search-BeCT36MA.js";import"./Input-Wm8tLy-0.js";import"./useControlled-DqFDREqa.js";import"./Button-D-ya50CL.js";import"./small-cross-D2srWpyH.js";import"./ActionButton-DXzxj-c5.js";import"./Checkbox-DnX7hc9m.js";import"./useValueChanged-CIvJaurU.js";import"./CollapsiblePanel-Bp6GY39F.js";import"./MultiColumnSortDialog-wNvsXQUr.js";import"./MenuTrigger-Dq_Lo_bz.js";import"./CompositeItem-Dls_a94V.js";import"./ToolbarRootContext-BTKqEH_P.js";import"./getDisabledMountTransitionStyles-D5mHC2vC.js";import"./getPseudoElementBounds-D85lzNV4.js";import"./chevron-down-DD8mUth2.js";import"./index-fBn-5OyE.js";import"./error-BIPDQryL.js";import"./BaseCbacBanner-93_WTKD8.js";import"./makeExternalStore-pWtHUq0J.js";import"./Tooltip-DFnQGaCd.js";import"./PopoverPopup-B1BeyJb-.js";import"./debounce-498a9Eyo.js";import"./useOsdkClient-Da4jyrei.js";import"./tick-CYXQ7A8e.js";import"./DropdownField-CE0ndGls.js";import"./isEqual-ClyUabIX.js";import"./withOsdkMetrics-39xkLVPI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
