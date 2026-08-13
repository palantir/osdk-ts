import{j as i}from"./iframe-CF1mFmNd.js";import{O as p}from"./object-table-D6a7yUQA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-XabowmnA.js";import"./preload-helper-Dyo3vXi1.js";import"./Table-UrQ6rfo0.js";import"./index-ZkVEQI0k.js";import"./Dialog-BbnC_UOW.js";import"./cross-CtBf6gU9.js";import"./svgIconContainer-qtuz32ZC.js";import"./useBaseUiId-CctkM0s6.js";import"./InternalBackdrop-CWDnlMhR.js";import"./composite-BjvuVKLa.js";import"./index-C_wuWB2u.js";import"./index-D8AsGQtU.js";import"./index-Bd6zDUgP.js";import"./useEventCallback-cJBmfMKa.js";import"./SkeletonBar-C_GztJJo.js";import"./LoadingCell-CvdChOFj.js";import"./ColumnConfigDialog-pI9cUpPr.js";import"./DraggableList-CZRLrBZA.js";import"./search-CvhfRkSX.js";import"./Input-CLK5rEjn.js";import"./useControlled-BUwxHsDX.js";import"./Button-CioK_zkV.js";import"./small-cross-B8iRViR2.js";import"./ActionButton-CjA05fbS.js";import"./Checkbox-6IezW9EE.js";import"./useValueChanged-BtFANzzg.js";import"./CollapsiblePanel-DQ5s565r.js";import"./MultiColumnSortDialog-DeM44oR3.js";import"./MenuTrigger-CcICQuse.js";import"./CompositeItem-DTJQQn4D.js";import"./ToolbarRootContext-CGiG5EWj.js";import"./getDisabledMountTransitionStyles-DUsGfUw-.js";import"./getPseudoElementBounds-DApMjkjc.js";import"./chevron-down-D2V5biuP.js";import"./index-AerYtyxb.js";import"./error-CPPAckvZ.js";import"./BaseCbacBanner-MkGV5vLh.js";import"./makeExternalStore-1VKcLwLW.js";import"./Tooltip-6aIxizpx.js";import"./PopoverPopup-CI2bYVg_.js";import"./toNumber-CCmcu9u0.js";import"./useOsdkClient-ltkHzHTm.js";import"./tick-WIn6K3EW.js";import"./DropdownField-Dc9pzEmD.js";import"./withOsdkMetrics-C8Y8iavr.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
