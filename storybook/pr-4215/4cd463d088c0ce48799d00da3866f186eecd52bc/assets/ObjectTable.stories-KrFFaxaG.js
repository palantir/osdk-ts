import{j as i}from"./iframe-BpjAczHY.js";import{O as p}from"./object-table-CbPG2EbH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CTFKTLpl.js";import"./preload-helper-n775iZGy.js";import"./Table-C8bNeHtW.js";import"./index-B865hR58.js";import"./Dialog-C0PdJPQK.js";import"./cross-C6qTQWHW.js";import"./svgIconContainer-C3jJhmpt.js";import"./useBaseUiId-99hOwMJj.js";import"./InternalBackdrop-Nq7KwH4o.js";import"./composite-Dz8fJC5u.js";import"./index-CL2exV6n.js";import"./index-BGlvu2Wm.js";import"./index-DA4_2A10.js";import"./useEventCallback-B6zcZW3p.js";import"./SkeletonBar-BecfrY7r.js";import"./LoadingCell-vBGp6yxc.js";import"./ColumnConfigDialog-CfCkja_H.js";import"./DraggableList-DuvP9j4v.js";import"./search-NVe0lSCh.js";import"./Input-BK2Nmyqv.js";import"./useControlled-DGtH5z0Q.js";import"./Button-Dj8yiv60.js";import"./small-cross-DupO9VP4.js";import"./ActionButton-CRHWpJnS.js";import"./Checkbox-DfWTU0cg.js";import"./useValueChanged-CSF7lu2m.js";import"./CollapsiblePanel-By7EAy8-.js";import"./MultiColumnSortDialog-Ciz1sd7u.js";import"./MenuTrigger-Be270hxZ.js";import"./CompositeItem-DG1i5uV0.js";import"./ToolbarRootContext-BQn0Rtks.js";import"./getDisabledMountTransitionStyles-BgiX7odw.js";import"./getPseudoElementBounds-CCx4Tlrc.js";import"./chevron-down-_ycbe8m1.js";import"./index-DmLzhgLv.js";import"./error-Biwv1K3K.js";import"./BaseCbacBanner-B6WijF8k.js";import"./makeExternalStore-RoIlT1g0.js";import"./Tooltip-VrYqX_Lh.js";import"./PopoverPopup-BxpA88JM.js";import"./debounce-Ds0PQScg.js";import"./useOsdkClient-D0Eek7Y4.js";import"./tick-B4peCy1V.js";import"./DropdownField-BJglwOE0.js";import"./isEqual-D9lvvdTI.js";import"./withOsdkMetrics-C6lIiCV7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
