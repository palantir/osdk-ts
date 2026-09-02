import{j as i}from"./iframe-CTewSG_j.js";import{O as p}from"./object-table-Bk-ld9Ev.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRMxbwZn.js";import"./preload-helper-C25ouRIs.js";import"./Table-kZrN-YU-.js";import"./index-BUWAeCIL.js";import"./Dialog-Dx2dqM-X.js";import"./cross-Dyevi5zm.js";import"./svgIconContainer-3JRMjvgA.js";import"./useBaseUiId-0-lRFcas.js";import"./InternalBackdrop-BViQPF1v.js";import"./composite-DC6Og9Tc.js";import"./index-BY0WDCEk.js";import"./index-Cz8uhmbU.js";import"./index-Bzdvr9St.js";import"./useEventCallback-Cv2Bx2Cg.js";import"./SkeletonBar-CMv4XQzP.js";import"./LoadingCell-CvogEU6t.js";import"./ColumnConfigDialog-CVkdhNeK.js";import"./DraggableList-D7xKaDwV.js";import"./search-CKuhorfg.js";import"./Input-Dy8oaUwS.js";import"./useControlled-C5WpgBSN.js";import"./Button-X3VWCY6_.js";import"./small-cross-Pk1qW6Px.js";import"./ActionButton-CpWXz7eG.js";import"./Checkbox-CY-cO03f.js";import"./useValueChanged-BSeCBV9n.js";import"./CollapsiblePanel-8yX91TFu.js";import"./MultiColumnSortDialog-BoTfusds.js";import"./MenuTrigger-DEv0baap.js";import"./CompositeItem-DkrjMxub.js";import"./ToolbarRootContext-CQyb8mSw.js";import"./getDisabledMountTransitionStyles-6DUqLUoF.js";import"./getPseudoElementBounds-CQV9Z7M2.js";import"./chevron-down-sFLW1j78.js";import"./index-DTMs9aOM.js";import"./error-BYYqLL3q.js";import"./BaseCbacBanner-CsSKeUFV.js";import"./makeExternalStore-C3Kcqa4P.js";import"./Tooltip-DSHwSf4n.js";import"./PopoverPopup-BLDgKRkB.js";import"./debounce-BgRFB7Ru.js";import"./useOsdkClient-BDqAgVp9.js";import"./tick-BfD28YZl.js";import"./DropdownField-BeW8_px6.js";import"./isEqual-DB4cWGR5.js";import"./withOsdkMetrics-DdgMiKO_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
