import{j as i}from"./iframe-CUQ6pW6f.js";import{O as p}from"./object-table-BY2xmCUc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Y1Yh9beF.js";import"./preload-helper-R0VkCi4m.js";import"./Table-B9k0d-uf.js";import"./index-h-DI9Lrm.js";import"./Dialog-SZ9zV0cP.js";import"./cross-DBScoIN6.js";import"./svgIconContainer-DgxjXUVD.js";import"./useBaseUiId-io2D7EyL.js";import"./InternalBackdrop-DeOAfNuf.js";import"./composite-DVURSZ_Q.js";import"./index-sOt4flAH.js";import"./index-B1pgXqxk.js";import"./index-BwGZQTcg.js";import"./useEventCallback-CBHs8zKc.js";import"./SkeletonBar-BRdyWD8N.js";import"./LoadingCell-GiHphTDn.js";import"./ColumnConfigDialog-BO_mXVOj.js";import"./DraggableList-hV8CyFWc.js";import"./search-NIM10vXd.js";import"./Input-BeRbTOIW.js";import"./useControlled-zbqpEGsi.js";import"./Button-C1Q3ab7J.js";import"./small-cross-IXjjZnoD.js";import"./ActionButton-fmMUa4gl.js";import"./Checkbox-CmojO_tp.js";import"./useValueChanged-DLbw96lb.js";import"./CollapsiblePanel-DptBjV9D.js";import"./MultiColumnSortDialog-R9mxJ5MY.js";import"./MenuTrigger-k5HlBQvB.js";import"./CompositeItem-BFFGDsSt.js";import"./ToolbarRootContext-Bu39Qel7.js";import"./getDisabledMountTransitionStyles-CQIeX0Ub.js";import"./getPseudoElementBounds-Ei-zDx44.js";import"./chevron-down-s1tgkNuZ.js";import"./index-DF9wOV2c.js";import"./error-hc0pOP7n.js";import"./BaseCbacBanner-Dg3AdP8h.js";import"./makeExternalStore-Bm8o0kSK.js";import"./Tooltip-Fo__1c0c.js";import"./PopoverPopup-D70TLWQP.js";import"./debounce-BSpE_UgL.js";import"./useOsdkClient-98hCJrJL.js";import"./tick-Bde80KdX.js";import"./DropdownField-OJ4m5ByP.js";import"./isEqual-DUoNzBVM.js";import"./withOsdkMetrics-C6sVCQ7L.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
