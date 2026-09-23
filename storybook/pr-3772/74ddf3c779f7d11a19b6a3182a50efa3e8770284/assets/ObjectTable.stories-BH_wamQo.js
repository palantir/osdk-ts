import{j as i}from"./iframe-4Ny8APPO.js";import{O as p}from"./object-table-BtuQNkk0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZSpZmzH.js";import"./preload-helper-DHWrfsom.js";import"./Table-SlWSGRl1.js";import"./index-BDa5owMw.js";import"./Dialog-Blcy0i-P.js";import"./cross-CeVI-uk1.js";import"./svgIconContainer-CI9V091I.js";import"./useBaseUiId-Cylkv8_6.js";import"./InternalBackdrop-CNPXl5Xz.js";import"./composite-rxIlBuDW.js";import"./index-DZ12fAcl.js";import"./index-C2QpJmDZ.js";import"./index-ZaefoN4K.js";import"./useEventCallback-DATLyuw9.js";import"./SkeletonBar-ByXHMYiN.js";import"./LoadingCell-_SUqlGt6.js";import"./ColumnConfigDialog-BR_l8BNb.js";import"./DraggableList-Ckkvfaos.js";import"./search-DqDmcAMp.js";import"./Input-BJD6b5K7.js";import"./useControlled-CDmZbK63.js";import"./Button-DLJHtyJi.js";import"./small-cross-DU1OkuNU.js";import"./ActionButton-DnZkMncX.js";import"./Checkbox-CtcGgixF.js";import"./useValueChanged-llMKBcc6.js";import"./CollapsiblePanel-DDWqfvdj.js";import"./MultiColumnSortDialog-BlY_gMV9.js";import"./MenuTrigger-DfhtGYzF.js";import"./CompositeItem-BlU9UJGi.js";import"./ToolbarRootContext-4zNRwQbb.js";import"./getDisabledMountTransitionStyles-PyWvPrXs.js";import"./getPseudoElementBounds-B8rT1ff7.js";import"./chevron-down-UQ0goxb7.js";import"./index-BpN3FT8y.js";import"./error-al8La3lG.js";import"./BaseCbacBanner-vi9CfhND.js";import"./makeExternalStore-DpCV1D9e.js";import"./Tooltip-CpfYCKb0.js";import"./PopoverPopup-BfwdSH7F.js";import"./debounce-DergXY_u.js";import"./useOsdkClient-CvNMVACY.js";import"./tick-DqjruMR1.js";import"./DropdownField-B1diitiQ.js";import"./isEqual-DKkbDDqj.js";import"./withOsdkMetrics-CwVVh_LX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
