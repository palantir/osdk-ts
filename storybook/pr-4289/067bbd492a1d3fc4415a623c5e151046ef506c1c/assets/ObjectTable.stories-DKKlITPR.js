import{j as i}from"./iframe-BxJiroe5.js";import{O as p}from"./object-table-w9yz1IDQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BWZTBvdQ.js";import"./preload-helper-DLdhLncI.js";import"./Table-CrHDgyUk.js";import"./index-D3_UFpM5.js";import"./Dialog-Bl6vHuaN.js";import"./cross-Bw3wvyRT.js";import"./svgIconContainer-C-ufoPHL.js";import"./useBaseUiId-CsOPh1qV.js";import"./InternalBackdrop-AN7PHPbY.js";import"./composite-BKj-HEYH.js";import"./index-nC3VniDk.js";import"./index-0CUe0U0r.js";import"./index-C_1QgYte.js";import"./useEventCallback-D4kZLjoj.js";import"./SkeletonBar-CGOwo2DD.js";import"./LoadingCell-CvdNH18k.js";import"./ColumnConfigDialog-DOlJ8-4o.js";import"./DraggableList-CD2xfPmV.js";import"./search-JlbJ_F58.js";import"./Input-DEdpGx6f.js";import"./useControlled-DfqnBr2w.js";import"./Button-Bo57TzJg.js";import"./small-cross-CYWa9OHl.js";import"./ActionButton-DQczrpII.js";import"./Checkbox-CePSClb6.js";import"./useValueChanged-Cp5QQiYs.js";import"./CollapsiblePanel-7oLCwys7.js";import"./MultiColumnSortDialog-Cirx4nz-.js";import"./MenuTrigger-VFGNWgnV.js";import"./CompositeItem-BT8yR1a5.js";import"./ToolbarRootContext--suhwR1X.js";import"./getDisabledMountTransitionStyles-DsPFGkAu.js";import"./getPseudoElementBounds-xDGWCFZp.js";import"./chevron-down-DjbhW8-h.js";import"./index-hrPqGcKI.js";import"./error-CmKYwFXp.js";import"./BaseCbacBanner-B2hkiRDH.js";import"./makeExternalStore-CSiVCh7w.js";import"./Tooltip-DMWyzbQ6.js";import"./PopoverPopup-BhS3yPpf.js";import"./debounce-ZBq--l-M.js";import"./useOsdkClient-DDpZHt2c.js";import"./tick-D-qLi4Dk.js";import"./DropdownField-DIb0z1YE.js";import"./isEqual-B9PqxiUA.js";import"./withOsdkMetrics-BDE5PqUj.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
