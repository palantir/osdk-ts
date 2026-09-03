import{j as i}from"./iframe-CVgWx_mk.js";import{O as p}from"./object-table-F8273WKJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cj9noLjG.js";import"./preload-helper-CFfBa7BD.js";import"./Table-ee8B848t.js";import"./index-KhqTHjvK.js";import"./Dialog-DbMkWdGC.js";import"./cross-Ch2oGVZP.js";import"./svgIconContainer-MI5luthc.js";import"./useBaseUiId-B0ovho4b.js";import"./InternalBackdrop-w-gmvkMd.js";import"./composite-mrQGTihx.js";import"./index-Dj_0AH5M.js";import"./index-kHlCzxdB.js";import"./index-xvBWe_nZ.js";import"./useEventCallback-KGEKy1Kp.js";import"./SkeletonBar-DSJVYfMY.js";import"./LoadingCell-C4Fh_PtS.js";import"./ColumnConfigDialog-rdQ95Jra.js";import"./DraggableList-N7PPscOJ.js";import"./search-BdiQZg80.js";import"./Input-B_ebmuiE.js";import"./useControlled-CmMjx2zB.js";import"./Button-BdWA5AOv.js";import"./small-cross-Ct--V4I5.js";import"./ActionButton-CMmqUJoP.js";import"./Checkbox-DUqXmOBs.js";import"./useValueChanged-BbKX3ggH.js";import"./CollapsiblePanel-CjrlksH3.js";import"./MultiColumnSortDialog-CB3-aHjQ.js";import"./MenuTrigger-BqO-RbZe.js";import"./CompositeItem-CCjIa2t2.js";import"./ToolbarRootContext-CaqtX5pJ.js";import"./getDisabledMountTransitionStyles-BU3lkCAL.js";import"./getPseudoElementBounds-BHTi51r7.js";import"./chevron-down-DTQ9C7Jw.js";import"./index-Bo_a2b3D.js";import"./error-aoO-9vvY.js";import"./BaseCbacBanner-dCyQbW6T.js";import"./makeExternalStore-Dyx7TWX2.js";import"./Tooltip-DP4ZeHkc.js";import"./PopoverPopup-X41W4tQB.js";import"./debounce-BtFrK_-r.js";import"./useOsdkClient-9IMUcDL7.js";import"./tick-BnV8UH-j.js";import"./DropdownField-BXwDMn-1.js";import"./isEqual-Csoq5Do4.js";import"./withOsdkMetrics-DoeckjWh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
