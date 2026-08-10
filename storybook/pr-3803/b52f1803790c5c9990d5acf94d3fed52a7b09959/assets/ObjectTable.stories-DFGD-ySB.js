import{j as i}from"./iframe-rflnhUL0.js";import{O as p}from"./object-table-BuC8IlXH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DlCMfGHX.js";import"./preload-helper-JrW1tzuD.js";import"./Table-CcDzY1b4.js";import"./index-CKEIJLZz.js";import"./Dialog-CaW29oo5.js";import"./cross-DnlUR3uJ.js";import"./svgIconContainer-CfRMoYYm.js";import"./useBaseUiId-B-D920ll.js";import"./InternalBackdrop-BmgqUUZm.js";import"./composite-DWpGM0Ys.js";import"./index-DskUz2s5.js";import"./index-Cmmo0Jm_.js";import"./index-CYog2F1S.js";import"./useEventCallback-IFua3RYV.js";import"./SkeletonBar-Bx9hAro-.js";import"./LoadingCell-gS42QkYV.js";import"./ColumnConfigDialog-st3e9zUU.js";import"./DraggableList-BB16q4ou.js";import"./search-Dbr7xQD1.js";import"./Input-DxO_QsKj.js";import"./useControlled-pmT8hQxb.js";import"./isEqual-DbN-tv-e.js";import"./isObject-BkxNQewi.js";import"./Button-C3fC6A6m.js";import"./ActionButton-DK7xXRak.js";import"./Checkbox-BROO1bDi.js";import"./useValueChanged-B6Ou-IZI.js";import"./CollapsiblePanel-BUTZsP3m.js";import"./MultiColumnSortDialog-CQP0H1PV.js";import"./MenuTrigger-CnsFIHQ4.js";import"./CompositeItem--VYrNhIm.js";import"./ToolbarRootContext-DEPy0pOQ.js";import"./getDisabledMountTransitionStyles-CZvlUQGU.js";import"./getPseudoElementBounds-C99NhKV6.js";import"./chevron-down-DJU55j1c.js";import"./index-CVhEYDwD.js";import"./error-CQhUr9EW.js";import"./BaseCbacBanner-C3An4QRs.js";import"./makeExternalStore-CT5u938L.js";import"./Tooltip-BsKl9t32.js";import"./PopoverPopup-BByUGNRE.js";import"./toNumber-DmIm5Qmb.js";import"./useOsdkClient-Ufw7pTgL.js";import"./tick-Dsl8J2EY.js";import"./DropdownField-CHHdcXVp.js";import"./withOsdkMetrics-KUKh2Lgy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
