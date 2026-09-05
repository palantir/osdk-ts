import{j as i}from"./iframe-BWsptOx9.js";import{O as p}from"./object-table-DihJbz49.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BQXXzug_.js";import"./preload-helper-hck2-2iY.js";import"./Table-B34l7PQv.js";import"./index-7iRS3JG9.js";import"./Dialog-DeDB1e_1.js";import"./cross-BoUzuZNF.js";import"./svgIconContainer-BOVctZiQ.js";import"./useBaseUiId-ITgInSIU.js";import"./InternalBackdrop-DDaeYjKA.js";import"./composite-BV3Gpi4q.js";import"./index-YOpRnDEd.js";import"./index-DlVXSgR3.js";import"./index-i61hjDRu.js";import"./useEventCallback-DutHdois.js";import"./SkeletonBar-2lSm92jN.js";import"./LoadingCell-D31__DIB.js";import"./ColumnConfigDialog-BvGTc6_G.js";import"./DraggableList-FujtZZxW.js";import"./search-CPZq-I8Z.js";import"./Input-DMLFbQ55.js";import"./useControlled-6nTFaGE5.js";import"./Button-VsXDl_eG.js";import"./small-cross-DNTeAJ8Z.js";import"./ActionButton-B6MwYfE-.js";import"./Checkbox-DWZvPWr3.js";import"./useValueChanged-CpdELUFS.js";import"./CollapsiblePanel-Bpn4fRSH.js";import"./MultiColumnSortDialog-zNWTGmuN.js";import"./MenuTrigger-Bcr0TAMN.js";import"./CompositeItem-BCNmsXPB.js";import"./ToolbarRootContext-DeurAZ5u.js";import"./getDisabledMountTransitionStyles-CA1DSUbY.js";import"./getPseudoElementBounds-BeC7UFLp.js";import"./chevron-down-B0CcOxY_.js";import"./index-BoyJNymp.js";import"./error-D4aggEwD.js";import"./BaseCbacBanner-DNLHXNw_.js";import"./makeExternalStore-De-Jb6J5.js";import"./Tooltip-BuhkBBtD.js";import"./PopoverPopup-CVs19qPy.js";import"./debounce-DyiaKSQ5.js";import"./useOsdkClient-CEV94sBT.js";import"./tick-DbxYiBa-.js";import"./DropdownField-B7NOWBJ6.js";import"./isEqual-btCNlz3t.js";import"./withOsdkMetrics-B8dcDHgp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
