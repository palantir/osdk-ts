import{j as i}from"./iframe-Bzfl0edf.js";import{O as p}from"./object-table-D216D20g.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLwY4Y7V.js";import"./preload-helper-B208VeDC.js";import"./Table-DXSJ4WFA.js";import"./index-CGVuXL6A.js";import"./Dialog-CPM6XpIW.js";import"./cross-CwTbRfdE.js";import"./svgIconContainer-Bnp_lIJz.js";import"./useBaseUiId-BJ8-iUbP.js";import"./InternalBackdrop-CdbgxrW_.js";import"./composite-C_lr7yXh.js";import"./index-CE0CDnbM.js";import"./index-Cqab7N-9.js";import"./index-qzBl6Ep6.js";import"./useEventCallback-EOEACuMH.js";import"./SkeletonBar-C8tmxbP7.js";import"./LoadingCell-Dvs5FgLo.js";import"./ColumnConfigDialog-BKNxlBbv.js";import"./DraggableList-BXsQGjpA.js";import"./search-qz1hnUVF.js";import"./Input-DisgP7IF.js";import"./useControlled-B36barjX.js";import"./isEqual-GJ2Dy3Gk.js";import"./isObject-p0Q0wz6R.js";import"./Button-fO_zAq5Q.js";import"./ActionButton-vIk83ayf.js";import"./Checkbox-CpngCqKq.js";import"./useValueChanged-TLybF-Yx.js";import"./CollapsiblePanel-Db1KUj0x.js";import"./MultiColumnSortDialog-D0k5O__9.js";import"./MenuTrigger-DliGnZwA.js";import"./CompositeItem-DlE9RLJl.js";import"./ToolbarRootContext-Dh6jr3zV.js";import"./getDisabledMountTransitionStyles-CuUAObkc.js";import"./getPseudoElementBounds-WRyicApX.js";import"./chevron-down-5xkKqCSO.js";import"./index-UVAOyVXG.js";import"./error-SO7gTkQm.js";import"./BaseCbacBanner-CNZkkluW.js";import"./makeExternalStore-Csana1x2.js";import"./Tooltip-vMXuTZw0.js";import"./PopoverPopup-CBy6YPRB.js";import"./toNumber-DVRarxex.js";import"./useOsdkClient-DujXvWiF.js";import"./tick-BGV2o7PZ.js";import"./DropdownField-ErWCEAWu.js";import"./withOsdkMetrics-Cb6Jf2gD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
