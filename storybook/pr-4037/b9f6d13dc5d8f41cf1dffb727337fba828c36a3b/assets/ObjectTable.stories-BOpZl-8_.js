import{j as i}from"./iframe-CpvsyndC.js";import{O as p}from"./object-table-wDn8u1NQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-fcyDeA4c.js";import"./preload-helper-v1ULc-zT.js";import"./Table-D8DVt9rQ.js";import"./index-OXZTet4E.js";import"./Dialog-B4LKyPNu.js";import"./cross-Bcfh6JZM.js";import"./svgIconContainer-Msyl1KBc.js";import"./useBaseUiId-CYqXXgOS.js";import"./InternalBackdrop-CRstaiGF.js";import"./composite-Bs9G8wyi.js";import"./index-BYz18T7P.js";import"./index-BQoSmoXa.js";import"./index-C9kvG9bI.js";import"./useEventCallback-TcvyV0P6.js";import"./SkeletonBar-CBAJCw1t.js";import"./LoadingCell-NGN7xI4A.js";import"./ColumnConfigDialog-DSpgaopW.js";import"./DraggableList-BYHWAua5.js";import"./search-CKGbca0G.js";import"./Input-D6DNjjz9.js";import"./useControlled-D-CxRUi2.js";import"./Button-CCew8i_i.js";import"./small-cross-D3J472u7.js";import"./ActionButton-BfYiSCcv.js";import"./Checkbox-k22hzlYz.js";import"./useValueChanged-CfxM7xWl.js";import"./CollapsiblePanel-CI8PgSve.js";import"./MultiColumnSortDialog-D6yyxhCn.js";import"./MenuTrigger-Dy0Pp6pd.js";import"./CompositeItem-DpS-WC5l.js";import"./ToolbarRootContext-Bn57AYug.js";import"./getDisabledMountTransitionStyles-CD-yuuJB.js";import"./getPseudoElementBounds-OuRRLSTT.js";import"./chevron-down-AhYvmllp.js";import"./index-4rhUuJvO.js";import"./error-o4jN_MzE.js";import"./BaseCbacBanner-Decf3pyE.js";import"./makeExternalStore-BjYOVJLR.js";import"./Tooltip-BS2jpkpK.js";import"./PopoverPopup-BfQ70eOn.js";import"./debounce-CzKUTwhW.js";import"./useOsdkClient-C7Ga7ftv.js";import"./tick-B3tE0rZT.js";import"./DropdownField--U9fCIxx.js";import"./isEqual-qnNML_NE.js";import"./withOsdkMetrics-BrjOXXvf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
