import{j as i}from"./iframe-PKQ9ibCT.js";import{O as p}from"./object-table--_rmj4Gv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bb0XMtcl.js";import"./preload-helper-BH7VrshK.js";import"./Table-BJvAxL9J.js";import"./index-ukVfuTjT.js";import"./Dialog-CHWnBS4i.js";import"./cross-DOJWIjq5.js";import"./svgIconContainer-YhegbL54.js";import"./useBaseUiId-DQlvSzSU.js";import"./InternalBackdrop-Cbkxpzju.js";import"./composite-tTdBmFM9.js";import"./index-BW8rGv1i.js";import"./index-DZmTL9O1.js";import"./index-DXRERb0v.js";import"./useEventCallback-TWSuTLFf.js";import"./SkeletonBar-BF2BXcUQ.js";import"./LoadingCell-BVRDgM_6.js";import"./ColumnConfigDialog-BWy13dE9.js";import"./DraggableList-NBRwcHk8.js";import"./search-DepRLaUT.js";import"./Input-D53UkdCo.js";import"./useControlled-CfOLBN9x.js";import"./isEqual-iwtzR--9.js";import"./isObject-Cj31Npi1.js";import"./Button-BRBjJXY9.js";import"./ActionButton-Dl0Sk01f.js";import"./Checkbox-D5gIBGDH.js";import"./useValueChanged-BMw49Xi8.js";import"./CollapsiblePanel-BttWpDAT.js";import"./MultiColumnSortDialog-ecqwI8o-.js";import"./MenuTrigger-CNRwb14Q.js";import"./CompositeItem-UPE06Smm.js";import"./ToolbarRootContext-B_pApPm-.js";import"./getDisabledMountTransitionStyles-BMnba74s.js";import"./getPseudoElementBounds-B-OF6H-7.js";import"./chevron-down-DK_Kvmib.js";import"./index-9HCV6PI6.js";import"./error-65-LfMMs.js";import"./BaseCbacBanner-BbayeaCd.js";import"./makeExternalStore-DsmTBrFd.js";import"./Tooltip-PkTE7Sf1.js";import"./PopoverPopup-Cj0NKnZI.js";import"./toNumber-D7LIoV4L.js";import"./useOsdkClient-C4aV9s_N.js";import"./tick-Df1xv9KR.js";import"./DropdownField-Tne5HCqs.js";import"./withOsdkMetrics-CcQyqJG6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
