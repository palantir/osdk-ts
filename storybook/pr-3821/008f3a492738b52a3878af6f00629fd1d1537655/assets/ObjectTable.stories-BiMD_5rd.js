import{j as i}from"./iframe-W7klRwPo.js";import{O as p}from"./object-table-DPoOoUWU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Ee3vc1cY.js";import"./preload-helper-DzzVRHA1.js";import"./Table-CCquNK1D.js";import"./index-DqAaMvOx.js";import"./Dialog-DuD248TJ.js";import"./cross-CVS5175r.js";import"./svgIconContainer-CavRQoS6.js";import"./useBaseUiId-CmsqdJ-e.js";import"./InternalBackdrop-KQ-rNslX.js";import"./composite-C2wWpGQA.js";import"./index-f5L3Ve5D.js";import"./index-BjtQcmRh.js";import"./index-f1Cp8ubY.js";import"./useEventCallback-Brx1vz4t.js";import"./SkeletonBar-yBswZtzo.js";import"./LoadingCell-B5McmPqq.js";import"./ColumnConfigDialog-BTUjzFV6.js";import"./DraggableList-E8Ss2X1R.js";import"./search-C0IxMrHh.js";import"./Input-e9mOs_hp.js";import"./useControlled-D-e4oaL6.js";import"./isEqual-DMQ1l2xA.js";import"./isObject-Bjagge_9.js";import"./Button-Djh2cg4Z.js";import"./ActionButton-CtI3jAj8.js";import"./Checkbox-BxgVjFqS.js";import"./useValueChanged-7P5VYuTV.js";import"./CollapsiblePanel-4FTZSScj.js";import"./MultiColumnSortDialog-DbzBLfHq.js";import"./MenuTrigger-D4nszTsU.js";import"./CompositeItem-Dn5gqGcd.js";import"./ToolbarRootContext-pxZkIimq.js";import"./getDisabledMountTransitionStyles-B1l5eJQs.js";import"./getPseudoElementBounds-xpP3PwwJ.js";import"./chevron-down-C5eusy-A.js";import"./index-CybiIO96.js";import"./error-BkwKplka.js";import"./BaseCbacBanner-Dj2l6T1s.js";import"./makeExternalStore-CKtLXmhF.js";import"./Tooltip-ZdoVZDJ1.js";import"./PopoverPopup-BG9P5Ue8.js";import"./toNumber-DxcGa0bC.js";import"./useOsdkClient-B59tI4Kr.js";import"./tick-BU2811b5.js";import"./DropdownField-Coo3INXv.js";import"./withOsdkMetrics-wjgZ6riq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
