import{j as i}from"./iframe-DNoPlrmW.js";import{O as p}from"./object-table-nzcluZUw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DGbpVY9a.js";import"./preload-helper-BA-kC20r.js";import"./Table-C4kOqFlr.js";import"./index-GMd43Lzl.js";import"./Dialog-CqjErnak.js";import"./cross-Dbdjn7RF.js";import"./svgIconContainer-CUvRyfnW.js";import"./useBaseUiId-CG8dqONM.js";import"./InternalBackdrop-DL1HDt1e.js";import"./composite-8FnP0FRm.js";import"./index-CiJY3H2C.js";import"./index-PNiqJ9T4.js";import"./index-SE8XSgW-.js";import"./useEventCallback-CX57274w.js";import"./SkeletonBar-DvQ-YXlb.js";import"./LoadingCell-Bp5le_if.js";import"./ColumnConfigDialog-BFHfnyqX.js";import"./DraggableList-isYHywku.js";import"./search-BAl_vtGE.js";import"./Input-Ci_chYxf.js";import"./useControlled-L9fBFGN0.js";import"./Button-Au7RONC3.js";import"./small-cross-U2NFloQ_.js";import"./ActionButton-DjdbAx1F.js";import"./Checkbox-CyToGzmV.js";import"./useValueChanged-DL6q5b55.js";import"./CollapsiblePanel-CJnRgBiN.js";import"./MultiColumnSortDialog-DyzvNICP.js";import"./MenuTrigger-D0TngpDX.js";import"./CompositeItem-CVV0k2jm.js";import"./ToolbarRootContext-D3fcj2nK.js";import"./getDisabledMountTransitionStyles-BJ4RXawF.js";import"./getPseudoElementBounds-ByFx_aK9.js";import"./chevron-down-AD2NYQ4Y.js";import"./index-DzuC6B4f.js";import"./error-BcP9NYX_.js";import"./BaseCbacBanner-ComGjBeE.js";import"./makeExternalStore-ThIGMhbJ.js";import"./Tooltip-BLCCo0To.js";import"./PopoverPopup-CsydTAyn.js";import"./debounce-CwIobNTC.js";import"./useOsdkClient-DEmkR6YZ.js";import"./tick-CkHBz8KO.js";import"./DropdownField-BQsQKUlk.js";import"./isEqual-CIzAN7dH.js";import"./withOsdkMetrics-C7RJ1R_V.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
